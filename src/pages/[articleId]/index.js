import { Fragment } from "react";
import CustomHead from "../../../components/layout/CustomHead";
import ArticleDetail from "../../../components/ArticleDetail/ArticleDetail";

// let combinedArticles = [];

const ArticleId = (props) => {
  const {
    // headLineArticles, heroSectionArticles,
    userArticle,
  } = props;

  // console.log("@@@userArticle is: ", userArticle);
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

async function fetchArticles() {
  let combinedArticles = [];
  // fetch articles in body
  const res1 = await fetch(
    `https://newsapi.org/v2/everything?sources=bbc-news&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY1}`
  );
  const data1 = await res1.json();
  const articles = data1.articles;
  const articles1 = articles.filter(
    (article) =>
      article.author !== null ||
      article.description !==
        "The latest five minute news bulletin from BBC World Service."
  );
  articles1.splice(0, 2);

  // fetch hero section articles
  const res2 = await fetch(
    // `https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=${process.env.NEWS_API_KEY}`
    `https://newsapi.org/v2/everything?sources=bbc-news&q=australia&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY1}`
  );
  const data2 = await res2.json();
  const articles2 = data2.articles;
  //  remove the articles with default image
  let filteredArticles = articles2.filter(
    (article) =>
      article.urlToImage !==
      "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg"
  );

  combinedArticles = [...articles1, ...filteredArticles];

  return combinedArticles;
}

export const getStaticPaths = async () => {
  const combinedArticles = await fetchArticles();

  // Pull ALL the ids out of the articles array ONLY
  const titleList = combinedArticles.map((article) => article.title);
  //Pre-build ALL the URL paths for all existing titles in array
  const paths = titleList.map((title) => ({
    params: { articleId: title.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

// STATIC SITE GENERATION
export const getStaticProps = async (context) => {
  const combinedArticles = await fetchArticles();

  //  Store params id value (article USER wants!)
  const articleQuery = context.params.articleId; // This articleId is passed in through click
  //  Filters articles array to match & return article passed in params
  const articleMatch = combinedArticles.filter(
    (article) => article.title.toString() === articleQuery
  );

  return {
    props: {
      userArticle: articleMatch[0],
    },
    revalidate: 60
  };
};

export default ArticleId;
