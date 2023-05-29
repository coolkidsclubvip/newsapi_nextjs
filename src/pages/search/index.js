import { useState, useEffect, Fragment } from "react";
import ArticlesList from "../../../components/mapping/ArticlesList/ArticlesList";
import CustomHead from "../../../components/layout/CustomHead";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const { query } = router.query;

  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async (query) => {
      const res = await fetch(
        `https://newsapi.org/v2/everything?sources=bbc-news&q=${query}&pageSize=21&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
        // "https://newsapi.org/v2/everything?sources=bbc-news&q=china&pageSize=22&apiKey=625bff08e86b4c3bbe16159345b322b1"
      );

      const data = await res.json();

      setResults(data.articles);
    };

    if (query) {
      fetchData(query);
    }
  }, [query]);

  return (
    <Fragment>
      <CustomHead title={"Search Results"} />
      <div>
        {results && <ArticlesList articles1={results} category={"search/"} />}
      </div>
    </Fragment>
  );
};

export default Search;
