import { Fragment } from "react";
import CustomHead from "../../../components/layout/CustomHead";
import ArticleDetail from "../../../components/ArticleDetail/ArticleDetail";
import fetchAmArticles from "../../../components/fetch/fetchAmArticles";
import Loader from "../../../components/Loader/index";
import { useRouter } from "next/router";

const AmArticleId = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }

  const { userArticle } = props;
  const category = "USnews";
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
  const articles = await fetchAmArticles();

  // Pull ALL the ids out of the articles array ONLY
  const titleList = articles.map((article) => article.title);
  //Pre-build ALL the URL paths for all existing titles in array
  const paths = titleList.map((title) => ({
    params: { amArticleId: title.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
};

// STATIC SITE GENERATION
export const getStaticProps = async (context) => {
  const articles = await fetchAmArticles();
  //  Store params id value (article USER wants!)
  const articleQuery = await context.params.amArticleId; // This Ais passed in through click
  //  Filters articles array to match & return article passed in params
  const articleMatch = articles.filter(
    (article) => article.title.toString() === articleQuery
  );

  return {
    props: {
      userArticle: articleMatch[0],
    },
    revalidate: 60 * 60,
  };
};

export default AmArticleId;
