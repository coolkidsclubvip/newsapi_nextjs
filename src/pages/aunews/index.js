import React from "react";
import CustomHead from "../../../components/layout/CustomHead";
import { Fragment } from "react";
import ArticlesList from "../../../components/mapping/ArticlesList/ArticlesList";
import fetchAuArticles from "../../../components/fetch/fetchAuArticles"

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
 const articles = await fetchAuArticles(); 
  articles.category = "aunews";
  // Returned data as props
  return {
    props: {
      auArticles: articles,
    },
    revalidate: 60,
  };
};

export default AuNews;
