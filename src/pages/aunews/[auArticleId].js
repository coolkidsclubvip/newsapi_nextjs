import { Fragment } from "react";
import CustomHead from "../../../components/layout/CustomHead";
import ArticleDetail from "../../../components/ArticleDetail/ArticleDetail";
import fetchAuArticles from "../../../components/fetch/fetchAuArticles";

// let combinedArticles = [];

const auArticleId = (props) => {
  const {
    // headLineArticles, heroSectionArticles,
    userArticle,
  } = props;
  const category = "aunews";
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
  const articles = await fetchAuArticles();

  // Pull ALL the ids out of the articles array ONLY
  const titleList = articles.map((article) => article.title);
  //Pre-build ALL the URL paths for all existing titles in array
  const paths = titleList.map((title) => ({
    params: { auArticleId: title.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
};

// STATIC SITE GENERATION
export const getStaticProps = async (context) => {
  const articles = await fetchAuArticles();
  //  Store params id value (article USER wants!)
  const articleQuery = context.params.auArticleId; // This auArticleId is passed in through click
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

export default auArticleId;
