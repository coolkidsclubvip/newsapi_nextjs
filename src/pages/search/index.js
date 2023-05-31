import { useState, useEffect, Fragment } from "react";
import ArticlesList from "../../../components/mapping/ArticlesList/ArticlesList";
import CustomHead from "../../../components/layout/CustomHead";
import { useRouter } from "next/router";
import styles from "./search.module.scss";

// const Search = () => {
//   const router = useRouter();
//   const { query } = router.query;

//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const fetchData = async (query) => {
//       const res = await fetch(
//         `https://newsapi.org/v2/everything?sources=bbc-news&q=${query}&pageSize=21&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
//       );

//       const data = await res.json();

//       setResults(data.articles);
//     };

//     if (query) {
//       fetchData(query);
//     }
//   }, [query]);
//   console.log("@@@@results is", results);

//   return (
//     <Fragment>
//       <CustomHead title={"Search Results"} />
//       <div>
//         {results.length === 0 ? (
//           <div className={styles.body}>
//             <p>
//               The keyword you are searching returns no result. Please Try
//               another keyword.
//             </p>
//           </div>
//         ) : (
//           <ArticlesList articles1={results} category={"search/"} />
//         )}
//       </div>
//     </Fragment>
//   );
// };

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
    `https://newsapi.org/v2/everything?sources=bbc-news&q=${query}&pageSize=21&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );
  const data = await res.json();

  return {
    props: {
      results: data.articles || [],
    },
  };
}

export default Search;
