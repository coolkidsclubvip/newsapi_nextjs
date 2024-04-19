// import { Fragment, useState } from "react";
// import CustomHead from "../../components/layout/CustomHead";
// import ArticleDetail from "../../components/ArticleDetail/ArticleDetail";
// import getCombinedArticles from "../../components/fetch/getCombinedArticles";
// import { useRouter } from "next/router";
// import Loader from "../../components/Loader/index";

// const ArticleId = (props) => {
//   const router = useRouter();
//   if (router.isFallback) {
//     return <Loader />;
//   }

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

// export const getStaticPaths = async () => {
//   const combinedArticles = await getCombinedArticles();
//   // Pull ALL the ids out of the articles array ONLY
//   const titleList = combinedArticles.map((article) => article.title);
//   //Pre-build ALL the URL paths for all existing titles in array
//   const paths = titleList.map((title) => ({
//     params: { articleId: title.toString() },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// };

// // STATIC SITE GENERATION
// export const getStaticProps = async (context) => {
//   const combinedArticles = await getCombinedArticles();
//   console.log("combinedArticles are:", combinedArticles);
//   //  Store params id value (article USER wants!)
//   const articleQuery = await context.params.articleId; // This articleId is passed in through click
//   //  Filters articles array to match & return article passed in params
//   const articleMatch = combinedArticles.filter(
//     (article) => article.title.toString() === articleQuery
//   );
//   console.log("articleMatch are:", articleMatch);
//   // Check if articleMatch is empty
//   if (articleMatch.length === 0) {
//     return {
//       notFound: true, // Return 404 page
//     };
//   }

//   return {
//     props: {
//       userArticle: articleMatch[0],
//     },
//     revalidate: 60 * 60,
//   };
// };

// export default ArticleId;



import { Fragment } from "react";
import CustomHead from "../../components/layout/CustomHead";
import ArticleDetail from "../../components/ArticleDetail/ArticleDetail";
import getCombinedArticles from "../../components/fetch/getCombinedArticles";
import { useRouter } from "next/router";
import Loader from "../../components/Loader/index";

const ArticleId = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }

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

export const getStaticPaths = async () => {
  // 返回一个空的路径数组，因为路径将由后面的 getStaticProps 动态生成
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  // 在这里执行异步操作获取文章数据
  const combinedArticles = await getCombinedArticles();

  // 获取文章标题参数
  const articleQuery = context.params.articleId;

  // 从所有文章中筛选出匹配的文章
  const articleMatch = combinedArticles.filter(
    (article) => article.title.toString() === articleQuery
  );

  // 检查是否找到了匹配的文章，如果没有，则返回404页面
  if (articleMatch.length === 0) {
    return {
      notFound: true,
    };
  }

  // 返回匹配的文章数据
  return {
    props: {
      userArticle: articleMatch[0],
    },
    revalidate: 3600, // 可选项，用于设置静态页面的重新验证时间
  };
};

export default ArticleId;
