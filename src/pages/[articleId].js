import { Fragment, useState } from "react";
import CustomHead from "../../components/layout/CustomHead";
import ArticleDetail from "../../components/ArticleDetail/ArticleDetail";
import getCombinedArticles from "../../components/fetch/getCombinedArticles";
import { useRouter } from "next/router";
import Loader from "../../components/Loader/index";

const ArticleId = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }

  const { userArticle } = props;
  const category = "";
  return (
    <Fragment>
      <CustomHead title={userArticle.title} />
      <ArticleDetail
        id={userArticle.title}
        urlToImage={userArticle.urlToImage}
        title={userArticle.title}
        description={userArticle.description}
        publishedAt={userArticle.publishedAt}
        content={userArticle.content}
        url={userArticle.url}
        author={userArticle.author}
        category={category}
      />
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  const combinedArticles = await getCombinedArticles();
  // Pull ALL the ids out of the articles array ONLY
  const titleList = combinedArticles.map((article) => article.title);
  //Pre-build ALL the URL paths for all existing titles in array
  const paths = titleList.map((title) => ({
    params: { articleId: title.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

// STATIC SITE GENERATION
export const getStaticProps = async (context) => {
  const combinedArticles = await getCombinedArticles();
  console.log("combinedArticles are:", combinedArticles);
  //  Store params id value (article USER wants!)
  const articleQuery = await context.params.articleId; // This articleId is passed in through click
  //  Filters articles array to match & return article passed in params
  const articleMatch = combinedArticles.filter(
    (article) => article.title.toString() === articleQuery
  );
  console.log("articleMatch are:", articleMatch);
  // Check if articleMatch is empty
  if (articleMatch.length === 0) {
    return {
      notFound: true, // Return 404 page
    };
  }

  return {
    props: {
      userArticle: articleMatch[0],
    },
    revalidate: 60 * 60,
  };
};

export default ArticleId;
