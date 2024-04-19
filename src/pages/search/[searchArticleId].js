import { Fragment } from "react";
import CustomHead from "../../../components/layout/CustomHead";
import ArticleDetail from "../../../components/ArticleDetail/ArticleDetail";

const SearchArticleId = (props) => {
  const { userArticle } = props;
  const category = "search";

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
        query={userArticle.query}
      />
    </Fragment>
  );
};

async function fetchArticles(query) {
  const response = await fetch(
    `https://newsapi.org/v2/everything?sources=bbc-news&q=${query}&pageSize=21&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY2}`
  );
  const data = await response.json();
  const articles = data.articles;

  return articles;
}

export const getServerSideProps = async (context) => {
  // Get the query word from context!!!important

  const refererHeader = context.req.headers.referer;
  const urlSearchParams = new URLSearchParams(new URL(refererHeader).search);
  const query = urlSearchParams.get("query");

  const articles = await fetchArticles(query);

  const articleQuery = context.params.searchArticleId;

  const articleMatch = articles.filter(
    (article) => article.title.toString() === articleQuery
  );

  let userArticle = null;
  if (articleMatch.length > 0) {
    userArticle = articleMatch[0];
    // Hook query keywords to userArticle, for "go back function"
    userArticle.query = query;
  }

  return {
    props: {
      userArticle: userArticle,
    },
  };
};

export default SearchArticleId;
