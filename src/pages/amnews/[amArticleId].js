import { Fragment } from "react";
import CustomHead from "../../../components/layout/CustomHead";
import ArticleDetail from "../../../components/ArticleDetail/ArticleDetail";
import fetchAmArticles from "../../../components/fetch/fetchAmArticles";

// let combinedArticles = [];

const amArticleId = (props) => {
  const { userArticle } = props;
  const category = "amnews";
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
    fallback: false,
  };
};

// STATIC SITE GENERATION
export const getStaticProps = async (context) => {
  const articles = await fetchAmArticles();
  //  Store params id value (article USER wants!)
  const articleQuery = context.params.amArticleId; // This amArticleIdis passed in through click
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

export default amArticleId;
