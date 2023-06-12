import { Fragment, useState } from "react";
import CustomHead from "../../components/layout/CustomHead";
import ArticleDetail from "../../components/ArticleDetail/ArticleDetail";
import fetchBodyArticles from "../../components/fetch/fetchBodyArticles";
import fetchHeroArticles from "../../components/fetch/fetchHeroArticles";
import getCombinedArticles from "../../components/fetch/getCombinedArticles";
import {useRouter} from "next/router";
import Loader from "../../components/Loader/index";

const ArticleId = (props) => {

  console.log("[Articleid].js page is running");

  const router = useRouter()
  if(router.isFallback) {
    return (<><Loader/></>)
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

  console.log("#####$$$$$paths: ", paths);
  return {
    paths,
    fallback:true,
  };
};

// STATIC SITE GENERATION
export const getStaticProps = async (context) => {
  const combinedArticles = await getCombinedArticles();
  //  Store params id value (article USER wants!)
  const articleQuery = await context.params.articleId; // This articleId is passed in through click
  //  Filters articles array to match & return article passed in params
  const articleMatch = combinedArticles.filter(
    (article) => article.title.toString() === articleQuery
  );

  console.log("@@@@##articleMatch is: ", articleMatch);
  return {
    props: {
      userArticle: articleMatch[0],
    },
    revalidate: 60,
  };
};

export default ArticleId;
