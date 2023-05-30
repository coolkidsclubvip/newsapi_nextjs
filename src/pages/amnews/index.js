import React from "react";
import CustomHead from "../../../components/layout/CustomHead";
import { Fragment } from "react";
import ArticlesList from "../../../components/mapping/ArticlesList/ArticlesList";

function AmNews({ amArticles }) {
  const category = "amnews/";
  return (
    <Fragment>
      <CustomHead title={"American News"} />

      {amArticles.length > 0 && (
        <ArticlesList articles1={amArticles} category={category} />
      )}
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY1}`
  );
  const data = await response.json();
  const articles = data.articles;
  articles.category = "amnews";
  // Returned data as props
  return {
    props: {
      amArticles: articles,
    },
    revalidate: 60 * 60,
  };
};

export default AmNews;
