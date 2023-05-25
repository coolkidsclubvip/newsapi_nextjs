import CustomHead from "../../components/layout/CustomHead";
import Header from "../../components/Header/Header";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Fragment } from "react";
import { useRouter } from "next/router";
import ArticlesList from "../../components/mapping/ArticlesList/ArticlesList";
import HeroSection from "../../components/HeroSection/HeroSection";
import styles from "./index.module.scss";

import ArticleTitle from "./[articleTitle]";

const inter = Inter({ subsets: ["latin"] });////////TO BE FIXED////



export default function Home({ headLineArticles, heroSectionArticles }) {
  // Conditionally render the ArticleTitle component only on dynamic endpoint visit
  const router = useRouter();
  const isDynamicRoute = true
  // router.route === "/[articleTitle]";

  return (
    <Fragment>
      <CustomHead />

      <HeroSection articles2={heroSectionArticles} />

      {headLineArticles.length > 0 && (
        <ArticlesList articles1={headLineArticles} />
      )}

      {/* Passing 2x props to ArticleTile component */}
      {isDynamicRoute && (
        <ArticleTitle
          headLineArticles={headLineArticles}
          heroSectionArticles={heroSectionArticles}
        />
      )}
    </Fragment>
  );
}

export const getStaticProps = async () => {
  // fetch articles in body
  const res1 = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.NEWS_API_KEY}`

    // `https://newsapi.org/v2/top-headlines?sources=abc-news-au&apiKey=${process.env.NEWS_API_KEY}` //abc news-au

    // `https://jsonplaceholder.typicode.com/posts?_limit=15`
  );
  const data1 = await res1.json();
  // const articles = await res.json();
  const articles1 = data1.articles;
  articles1.shift(); // remove the 1st bbc empty articles

  // fetch hero section articles
  const res2 = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=${process.env.NEWS_API_KEY}`
  );
  const data2 = await res2.json();
  const articles2 = data2.articles;
  //  remove the articles with default image
  let filteredArticles = articles2.filter(article => article.urlToImage !== 'https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg');


  return {
    props: {
      headLineArticles: articles1,
      heroSectionArticles: filteredArticles,
    },
    revalidate: 60 * 60,
  };
};
