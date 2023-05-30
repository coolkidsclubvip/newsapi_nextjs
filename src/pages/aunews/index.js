import React from "react";
import CustomHead from "../../../components/layout/CustomHead";
import { Fragment } from "react";
import ArticlesList from "../../../components/mapping/ArticlesList/ArticlesList";

function AuNews({ auArticles }) {
  const category = "aunews/";
  return (
    <Fragment>
      <CustomHead title={"Australian News"} />

      {auArticles.length > 0 && (
        <ArticlesList articles1={auArticles} category={category} />
      )}
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=abc-news-au&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY1}`
  );
  const data = await response.json();
  const articles = data.articles;
  articles.category = "aunews";
  // Returned data as props
  return {
    props: {
      auArticles: articles,
    },
    revalidate: 60 * 60,
  };
};

export default AuNews;
