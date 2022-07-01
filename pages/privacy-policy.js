// import React, { Component, Fragment } from "react";

import parse from "html-react-parser";
import AboutHero from "../components/AboutHero";
import { getprivacyPolicy } from "../lib/api";
import AboutOverview from "../components/AboutOverview";
import Career from "../components/Career";
import GivingBack from "../components/GivingBack";
import AboutFeature from "../components/AboutFeature";
import Team from "../components/Team";
import PrivacyPolicyHero from "../components/PrivacyPolicyhero";
import PrivacyPolicyContent from "../components/PrivacyPolicyContent";
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
      <PrivacyPolicyHero content={page.hero} />
      <PrivacyPolicyContent content={page.Content} />
    </div>
  );
}

export async function getStaticProps() {
  const page = await getprivacyPolicy();

  return {
    props: { page },
    revalidate: 10,
  };
}
