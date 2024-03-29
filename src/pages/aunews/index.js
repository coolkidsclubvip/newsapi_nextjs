import React from "react";
import CustomHead from "../../../components/layout/CustomHead";
import { Fragment, useEffect, useState } from "react";
import ArticlesList from "../../../components/mapping/ArticlesList/ArticlesList";
import fetchAuArticles from "../../../components/fetch/fetchAuArticles"
import Loader from "../../../components/Loader/index";

function AuNews({ auArticles }) {
  // Loader effect when loading
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (auArticles) {
      setIsLoading(false);
    }
  }, [isLoading]);

  const category = "aunews";
  return (
    <Fragment>
      <CustomHead title={"Australian News"} />

      {isLoading === true ? (
        <Loader />
      ) : (
        <ArticlesList articles1={auArticles} category={category} />
      )}
    </Fragment>
  );
}

// export const getStaticProps = async () => {
//  const articles = await fetchAuArticles(); 

//   // Returned data as props
//   return {
//     props: {
//       auArticles: articles,
//     },
//     revalidate: 60*60,
//   };
// };
export const getServerSideProps = async () => {
  try {
    const articles = await fetchAuArticles();

    return {
      props: {
        auArticles: articles,
      },
    };
  } catch (error) {
    console.error("Error fetching articles:", error.message);
    return {
      notFound: true,
    };
  }
};

export default AuNews;
