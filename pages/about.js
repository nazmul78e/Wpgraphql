// import React, { Component, Fragment } from "react";

import parse from "html-react-parser";
import AboutHero from "../components/AboutHero";
import { getAboutPage } from "../lib/api";
import AboutOverview from "../components/AboutOverview";

import AboutFeature from "../components/AboutFeature";
import Team from "../components/Team";
export default function About({ page }) {
  // const heroPost = edges[0]?.node;
  // const morePosts = edges.slice(1);
  // console.log(preview);
  // console.log("post", edges);
  // console.log(pages);

  // const heroPage = edges[0]?.node;
  // const morePages = edges.slice(1);
  console.log("About", page);
  return (
    <div>
      <AboutHero content={page.heroSection} />
      <AboutOverview content={page.overviewSection} />
      <AboutFeature content={page.features} />
      <Team content={page.team} />
    </div>
  );
}

export async function getStaticProps() {
  const page = await getAboutPage();

  return {
    props: { page },
    revalidate: 10,
  };
}
