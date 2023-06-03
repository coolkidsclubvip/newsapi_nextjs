import { Fragment } from "react";
import ArticlesList from "../../../components/mapping/ArticlesList/ArticlesList";
import CustomHead from "../../../components/layout/CustomHead";
import styles from "./search.module.scss";

// change client side fetching to SSR, to avoid 426 error from newsapi.

const Search = ({ results }) => {
  return (
    <Fragment>
      <CustomHead title={"Search Results"} />
      <div>
        {results.length === 0 ? (
          <div className={styles.body}>
            <p>
              The keyword you are searching returns no result. Please Try
              another keyword.
            </p>
          </div>
        ) : (
          <ArticlesList articles1={results} category={"search/"} />
        )}
      </div>
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const { query } = context.query;

  if (!query) {
    return {
      props: {
        results: [],
      },
    };
  }

  const res = await fetch(
    `https://newsapi.org/v2/everything?sources=bbc-news&q=${query}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );
  const data = await res.json();
console.log("@@search data is:",data);
  return {
    props: {
      results: data.articles || [],
    },
  };
}

export default Search;
