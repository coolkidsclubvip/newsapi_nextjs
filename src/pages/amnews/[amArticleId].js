import { Fragment } from "react";
import CustomHead from "../../../components/layout/CustomHead";
import ArticleDetail from "../../../components/ArticleDetail/ArticleDetail";

// let combinedArticles = [];

const amArticleId = (props) => {
  const {
    // headLineArticles, heroSectionArticles,
    userArticle,
  } = props;
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

async function fetchArticles() {
  // fetch articles in body
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY1}`
  );
  const data = await response.json();

  // const articles = await res.json();
  const articles = data.articles;
  return articles;
}

export const getStaticPaths = async () => {
  const articles = await fetchArticles();

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
  const articles = await fetchArticles();
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
