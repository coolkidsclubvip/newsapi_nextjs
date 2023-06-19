import { Fragment,useState } from "react";
import styles from "./ArticleList.module.scss";
import ArticleItem from "../ArticleItem/ArticleItem";
import ArticlePagination from "../../Pagination/ArticlePagination";
import paginate from "../../../src/lib/paginate";

function ArticlesList({ articles1, category }) {

  // pagination function
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    console.log(page);
    setCurrentPage(page);
  };
const pageSize= 12;
const paginatedArticles = paginate(articles1, currentPage, pageSize)

  return (
    <Fragment>
      <div className={styles.articlesList}>
        <ArticlePagination
          itemsCount={articles1.length}
          pageSize={pageSize}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
        <div className="row row-cols-1 row-cols-xl-3 row-cols-md-1 g-4 w-100">
          {paginatedArticles.map((article, index) => (
            <div className="col-sm-12 col-sm-6" key={index}>
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
        <ArticlePagination
          itemsCount={articles1.length}
          pageSize={pageSize}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </Fragment>
  );
}
 
export default ArticlesList;
