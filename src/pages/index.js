import CustomHead from "../../components/layout/CustomHead";
import { Inter } from "next/font/google";
import { Fragment } from "react";
import Link from "next/link";

import ArticlesList from "../../components/mapping/ArticlesList/ArticlesList";
import HeroSection from "../../components/HeroSection/HeroSection";

import fetchBodyArticles from "../../components/fetch/fetchBodyArticles";
import fetchHeroArticles from "../../components/fetch/fetchHeroArticles";
import fetchCoinList from "../../components/fetch/fetchCoinList";

const inter = Inter({ subsets: ["latin"] }); ////////TO BE FIXED////

export default function Home({ coinData, heroArticles, bodyArticles }) {
  const category = "";

  return (
    <Fragment>
      <CustomHead title={"Home"} />

      <HeroSection coinData={coinData} articles2={heroArticles} />

      {bodyArticles.length > 0 && (
        <ArticlesList articles1={bodyArticles} category={category} />
      )}
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const coinData = await fetchCoinList();
  const articles1 = await fetchHeroArticles();
  const articles2 = await fetchBodyArticles();

  return {
    props: {
      coinData: coinData,
      heroArticles: articles1,
      bodyArticles: articles2,
    },
    revalidate: 60 * 60,
  };
};
