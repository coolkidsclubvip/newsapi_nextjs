import CustomHead from "../../components/layout/CustomHead";
import { Inter } from "next/font/google";
import { Fragment } from "react";
// import { useRouter } from "next/router";
import ArticlesList from "../../components/mapping/ArticlesList/ArticlesList";
import HeroSection from "../../components/HeroSection/HeroSection";
// import styles from "./index.module.scss";

const inter = Inter({ subsets: ["latin"] }); ////////TO BE FIXED////

export default function Home({
  bodyArticles,
  heroSectionArticles,
}) {
  // // Conditionally render the ArticleTitle component only on dynamic endpoint visit
  // const router = useRouter();
  // // const isDynamicRoute = true;
  // router.route === "/[articleTitle]";
  const category = "";
  return (
    <Fragment>
      <CustomHead title={"Home"} />

      <HeroSection articles2={heroSectionArticles} />

      {bodyArticles.length > 0 && (
        <ArticlesList articles1={bodyArticles} category={category} />
      )}
    </Fragment>
  );
}

export const getStaticProps = async () => {
  // fetch articles in body
  const res1 = await fetch(
    `https://newsapi.org/v2/everything?sources=bbc-news&pageSize=10&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY1}`

    // `https://newsapi.org/v2/top-headlines?sources=abc-news-au&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY1}` //abc news-au
  );

  const data1 = await res1.json();

   if (!res1.ok) {
     throw new Error(
       `Failed to fetch posts - Error ${res1.status}: ${data1.message}`
     );
   }
  const articles = data1.articles;
  const articles1 = articles.filter(
    (article) =>
      article.author !== null &&
      article.description !==
        "The latest five minute news bulletin from BBC World Service."
  );
  // console.log("articles1 in the body are: ", articles1);

  // fetch hero section articles
  const res2 = await fetch(
    `https://newsapi.org/v2/everything?sources=bbc-news&q=australia&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY1}`
  );

  const data2 = await res2.json();

    if (!res2.ok) {
      throw new Error(
        `Failed to fetch posts - Error ${res2.status}: ${data2.message}`
      );
    }
  const articles2 = data2.articles;

  return {
    props: {
      heroSectionArticles: articles2,
      bodyArticles: articles1,
    },
    revalidate: 60,
  };
};
