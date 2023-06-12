import React from "react";
import CustomHead from "../../../components/layout/CustomHead";
import { Fragment } from "react";
import ArticlesList from "../../../components/mapping/ArticlesList/ArticlesList";
import fetchAmArticles from "../../../components/fetch/fetchAmArticles";

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
  const articles = await fetchAmArticles();
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
