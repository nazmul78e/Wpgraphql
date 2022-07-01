import Head from "next/head";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";

import { getPageWithSlug } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import Link from "next/link";

export default function Index({ pages, preview }) {
  // console.log("page", pages);

  // const heroPage = edges[0]?.node;
  // const morePages = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Container>
        <Intro />

        <div>
          <Link href="/">
            <a>{pages.title}</a>
          </Link>

          <div> {pages.id}</div>
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const pages = await getPageWithSlug(preview);
  console.log(pages);
  return {
    props: { pages, preview },
    revalidate: 10,
  };
}
