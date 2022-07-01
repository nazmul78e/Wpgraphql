import Head from "next/head";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { getPage } from "../lib/api";
import { getClient } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import Benefits from "../components/Benefits";
import ClientShowcase from "../components/ClientShowcase";
import ProvidedServices from "../components/ProvidedServices";
import HomeHero from "../components/HomeHero";

export default function Index({ page }) {
  // const heroPost = edges[0]?.node;
  // const morePosts = edges.slice(1);
  // console.log(preview);
  // console.log("post", edges);
  // console.log(pages);

  // const heroPage = edges[0]?.node;
  // const morePages = edges.slice(1);
  console.log("Index", page);
  return (
    <div>
      <HomeHero content={page.hero} />
      <Benefits content={page.benefits} />
      <ClientShowcase content={page.clientShowcase} />
      <ProvidedServices content={page.providedServices} />
    </div>
  );
}

export async function getStaticProps() {
  const page = await getPage();

  return {
    props: { page },
    revalidate: 10,
  };
}
