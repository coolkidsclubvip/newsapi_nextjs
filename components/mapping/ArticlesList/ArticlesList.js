import styles from "./ArticleList.module.scss";
import ArticleItem from "../ArticleItem/ArticleItem";
import Link from "next/link";

function ArticlesList({ articles1,category }) {
  return (
    <div className={styles.articlesList}>
      <div className="row row-cols-1 row-cols-xl-3 row-cols-md-2 g-4 w-100">
        {articles1.map((article, index) => (
          <div className="col" key={index}>
            <ArticleItem
              id={article.title}
              urlToImage={article.urlToImage}
              url={article.url}
              title={article.title}
              description={article.description}
              publishedAt={article.publishedAt}
              category={category}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticlesList;
