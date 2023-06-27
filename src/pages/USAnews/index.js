import React from "react";
import CustomHead from "../../../components/layout/CustomHead";
import { Fragment, useEffect, useState } from "react";
import ArticlesList from "../../../components/mapping/ArticlesList/ArticlesList";
import fetchAmArticles from "../../../components/fetch/fetchAmArticles";
import Loader from "../../../components/Loader/index";

function AmNews({ amArticles }) {
  // Loader effect when loading
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (amArticles) {
      setIsLoading(false);
    }
  }, [isLoading]);

  const category = "USAnews";
  return (
    <Fragment>
      <CustomHead title={"American News"} />

      {isLoading === true ? (
        <Loader />
      ) : (
        <ArticlesList articles1={amArticles} category={category} />
      )}
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const articles = await fetchAmArticles();

  // Returned data as props
  return {
    props: {
      amArticles: articles,
    },
    revalidate: 60 * 60,
  };
};

export default AmNews;
