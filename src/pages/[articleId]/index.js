// import { Fragment } from "react";
// import CustomHead from "../../../components/layout/CustomHead";
// import ArticleDetail from "../../../components/ArticleDetail/ArticleDetail";



// const ArticleId = (props) => {
//   const { userArticle } = props;

//   const category = "";
//   return (
//     <Fragment>
//       <CustomHead title={userArticle.title} />
//       <ArticleDetail
//         id={userArticle.title}
//         urlToImage={userArticle.urlToImage}
//         title={userArticle.title}
//         description={userArticle.description}
//         publishedAt={userArticle.publishedAt}
//         content={userArticle.content}
//         url={userArticle.url}
//         author={userArticle.author}
//         category={category}
//       />
//     </Fragment>
//   );
// };

// async function fetchArticles() {
//   let combinedArticles = [];
//   // fetch articles in body
//   const res1 = await fetch(
//     `https://newsapi.org/v2/everything?sources=bbc-news&pageSize=10&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY1}`
//   );

//   const data1 = await res1.json();

//   if (!res1.ok) {
//     throw new Error(
//       `Failed to fetch posts - Error ${res1.status}: ${data1.message}`
//     );
//   }

//   const articles = data1.articles;
//   const articles1 = articles.filter(
//     (article) =>
//       article.author !== null &&
//       article.description !==
//         "The latest five minute news bulletin from BBC World Service."
//   );

//   // fetch hero section articles
//   const res2 = await fetch(
//     `https://newsapi.org/v2/everything?sources=bbc-news&q=australia&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY1}`
//   );

//   const data2 = await res2.json();

//   if (!res2.ok) {
//     throw new Error(
//       `Failed to fetch posts - Error ${res2.status}: ${data2.message}`
//     );
//   }

//   const articles2 = data2.articles;

//   combinedArticles = [...articles1, ...articles2];
//   // console.log("@@@ is combinedArticles is:", combinedArticles);

//   return combinedArticles;
// }

// export const getStaticPaths = async () => {
//   const combinedArticles1 = await fetchArticles();

//   // Pull ALL the ids out of the articles array ONLY
//   const titleList = combinedArticles1.map((article) => article.title);
//   //Pre-build ALL the URL paths for all existing titles in array
//   const paths = titleList.map((title) => ({
//     params: { articleId: title.toString() },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

// // STATIC SITE GENERATION
// export const getStaticProps = async (context) => {
//   const combinedArticles2 = await fetchArticles();
//   //  Store params id value (article USER wants!)
//   const articleQuery = await context.params.articleId; // This articleId is passed in through click
//   //  Filters articles array to match & return article passed in params
//   const articleMatch = combinedArticles2.filter(
//     (article) => article.title.toString() === articleQuery
//   );

//   console.log("@@@@##articleMatch is: ", articleMatch);
//   return {
//     props: {
//       userArticle: articleMatch[0],
//     },
//     revalidate: 60,
//   };
// };

// export default ArticleId;



import { Fragment } from "react";
import CustomHead from "../../../components/layout/CustomHead";
import ArticleDetail from "../../../components/ArticleDetail/ArticleDetail";

const ArticleId = (props) => {
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

async function fetchArticles() {
  // Fetch articles from the API endpoint
  const res = await fetch(
    `https://newsapi.org/v2/everything?sources=bbc-news&pageSize=20&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY1}`
  );

  if (!res.ok) {
    throw new Error(
      `Failed to fetch articles - Error ${res.status}: ${res.statusText}`
    );
  }

  const data = await res.json();
  const articles = data.articles;

  const filteredArticles = articles.filter(
    (article) =>
      article.author !== null &&
      article.description !==
        "The latest five minute news bulletin from BBC World Service."
  );

  return filteredArticles;
}

export const getServerSideProps = async (context) => {
  const combinedArticles = await fetchArticles();

  const articleQuery = context.params.articleId;
  const articleMatch = combinedArticles.find(
    (article) => article.title.toString() === articleQuery
  );

  if (!articleMatch) {
    return {
      notFound: true, // Return 404 page if article is not found
    };
  }

  return {
    props: {
      userArticle: articleMatch,
    },
  };
};

export default ArticleId;
