const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query = "", { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(`${API_URL}/graphql`, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPreviewPost(id, idType = "DATABASE_ID") {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  );
  return data.post;
}

export async function getAllPostsWithSlug() {
  // console.log("post", post);
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
            video {
              videoSource
              videoUrl
            }
          }
        }
      }
    }
  `);
  return data?.posts;
}

export async function getAllPostForPage() {
  const data = await fetchAPI(`
  query AllPages {
    pages(first: 10) {
      edges {
        node {
          id
          title
          slug
        
        }
      }
    }
}
  `);
  return data?.pages;
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.posts;
}

export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post;
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug;
  const isDraft = isSamePost && postPreview?.status === "draft";
  const isRevision = isSamePost && postPreview?.status === "publish";
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      video {
        videoSource
        videoUrl
        
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ""
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? "DATABASE_ID" : "SLUG",
      },
    }
  );

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id;
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node;

    if (revision) Object.assign(data.post, revision);
    delete data.post.revisions;
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug);
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop();

  return data;
}
export async function getPageWithSlug() {
  const data = await fetchAPI(`
  query AllPages {
    pageBy(uri: "/sample-page/") {
      content
      date
      id
     
      slug
      title
    }
  } 
  
  `);

  return data?.pageBy;
}
export async function getPage() {
  const data = await fetchAPI(`
  query AllPages {
    pageBy(id: "cG9zdDoxMA==") {
      home {
        benefits {
          heading
          image {
            sourceUrl
          }
          singleBenefit {
            icon {
              sourceUrl
            }
            title
            description
          }
          buttonText
          buttonLink {
            target
            url
          }
        }
        clientShowcase {
          sectionTitle
          clients {
            clientLogo {
              sourceUrl
            }
          }
        }
        providedServices {
          heading
          subHeading
          image {
            sourceUrl
          }
          serviceList {
            serviceTitle
          }
          buttonText
          buttonLink {
            target
            url
          }
        }
        hero {

          description
          backgroundImage {
            sourceUrl
          }
          buttonText
          buttonUrl {

            url
          }
          images {
            image1 {
              sourceUrl
            }
            image2 {
              sourceUrl
            }
            image3 {
              sourceUrl
            }
          }
          heading
        }
      }
    }
  }

  `);

  return data?.pageBy.home;
}

export async function getAboutPage() {
  const data = await fetchAPI(`
  query AboutPages {
    pageBy(id: "cG9zdDoxMg==") {
      about {
        heroSection {
          heading
          welcomeImage {
            sourceUrl
          }
        }
        overviewSection {
          buttonText
          buttonLink {
            target
            title
            url
          }
          verticalText
          description
          heading
       
        }
        features {
          featureDetails1 {
            featureTitle
            featureDescription
            fieldGroupName
          }
          featureDetails2 {
            featureTitle
            featureDescription
            fieldGroupName
          }
          image {
            sourceUrl
          }
        }
            team {
          heading
          teamMember {
            memberImage {
              sourceUrl
            }
            name
            position
            socialLinks {
              socialProfileUrl {
                target
                title
                url
              }
              socialProfleType
            }
          }
        }
        
      }
    }
  }

  `);

  return data?.pageBy.about;
}

//   query AllPages {
//     pageBy(uri: "/sample-page/") {
//       content
//       date
//       id

//       slug
//       title
//     }
//   }

//   `);

//   return data?.pageBy;
// }
