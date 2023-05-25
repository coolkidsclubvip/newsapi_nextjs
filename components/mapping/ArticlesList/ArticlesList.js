import styles from "./ArticleList.module.scss";
import ArticleItem from "../ArticleItem/ArticleItem";

function ArticlesList({articles1}) {
  return (
    <>
      <div className="row row-cols-1 row-cols-xl-3 row-cols-md-2 g-4">
        {articles1.map((article, index) => (
          <div className="col" key={index}>
            <ArticleItem
              id={article.title}
              urlToImage={article.urlToImage}
              url={article.url}
              title={article.title}
              description={article.description}
              publishedAt={article.publishedAt}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ArticlesList;
