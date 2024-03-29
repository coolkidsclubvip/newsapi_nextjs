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

  const category = "USnews";
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

// export const getStaticProps = async () => {
//   const articles = await fetchAmArticles();

//   // Returned data as props
//   return {
//     props: {
//       amArticles: articles,
//     },
//     // Renew data every 1 hour
//     revalidate: 60 * 60,
//   };
// };
export const getServerSideProps = async () => {
  try {
    const articles = await fetchAmArticles();

    return {
      props: {
        amArticles: articles,
      },
    };
  } catch (error) {
    console.error("Error fetching articles:", error.message);
    return {
      notFound: true,
    };
  }
};

export default AmNews;
