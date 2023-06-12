import CustomHead from "../../components/layout/CustomHead";
import { Inter } from "next/font/google";
import { Fragment } from "react";
import Link from "next/link";

import ArticlesList from "../../components/mapping/ArticlesList/ArticlesList";
import HeroSection from "../../components/HeroSection/HeroSection";

import fetchBodyArticles from "../../components/fetch/fetchBodyArticles";
import fetchHeroArticles from "../../components/fetch/fetchHeroArticles";

const inter = Inter({ subsets: ["latin"] }); ////////TO BE FIXED////

export default function Home({ bodyArticles, heroArticles }) {
  const category = "home";
  return (
    <Fragment>
      <CustomHead title={"Home"} />
<Link href="/home"> to Home</Link>
      <HeroSection articles2={heroArticles} />

      {bodyArticles.length > 0 && (
        <ArticlesList articles1={bodyArticles} category={category} />
      )}
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const articles1 = await fetchHeroArticles();
  const articles2 = await fetchBodyArticles();

  return {
    props: {
      heroArticles: articles1,
      bodyArticles: articles2,
    },
    revalidate: 60,
  };
};
