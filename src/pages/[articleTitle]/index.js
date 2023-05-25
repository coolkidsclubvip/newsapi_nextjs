import React from "react";
import { Fragment } from "react";
import CustomHead from "../../../components/layout/CustomHead";
import ArticleDetail from "../../../components/AticleDetail/ArticleDetail";

let combinedArticles = []


function ArticleTitle(props) {
   
     
     const { headLineArticles, heroSectionArticles, article } = props;
      combinedArticles = [...headLineArticles,...heroSectionArticles];
     
console.log("article is:",article);

  return (
    <Fragment>
      <CustomHead title={article.title} />
      <ArticleDetail
        id={article.title}
        urlToImage={article.urlToImage}
        url={article.url}
        title={article.title}
        description={article.description}
        publishedAt={article.publishedAt}
        content={article.content}
      />
    </Fragment>
  );
}

export const getStaticPaths = async () => {
  console.log("combinedArticles is:", combinedArticles);
  // Pull ALL the ids out of the articles array ONLY
  const titleList = combinedArticles.map((article) => article.title);
  //Pre-build ALL the URL paths for all existing titles in array
   const paths = titleList.map((title) => ({ params: { articleTitle: title.toString() } }));
     return {
       paths,
       fallback: false,
     };
};


// STATIC SITE GENERATION 
export const getStaticProps = async ( context ) => {
  //  Store params id value (article USER wants!)
  const articleQuery = context.params.articleTitle; // This articleTitle is passed in through click
  //  Filters articles array to match & return article passed in params
    const articleMatch = combinedArticles.filter(
      (article) => article.title.toString() === articleQuery
    );

    return {
     props:{
          article:articleMatch[0]
     }
    }
}







export default ArticleTitle;
