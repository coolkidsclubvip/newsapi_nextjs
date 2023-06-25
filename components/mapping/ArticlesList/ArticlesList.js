import { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import styles from "./ArticleList.module.scss";
import ArticleItem from "../ArticleItem/ArticleItem";
import ArticlePagination from "../../Pagination/ArticlePagination";
import paginate from "../../../src/lib/paginate";
import { Container } from "react-bootstrap";

function ArticlesList({ articles1, category }) {
  // React-paginate is below:
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = articles1.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(articles1.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % articles1.length;

    setItemOffset(newOffset);
  };

  return (
    <div className="container-fluid">
      <div className={styles.articlesList}>
       {pageCount > 1 && (
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< prev"
            pageClassName="page-item"
            pageLinkClassName={styles.pageLink}
            previousClassName="page-item"
            previousLinkClassName={styles.prev}
            nextClassName="page-item"
            nextLinkClassName={styles.next}
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName={styles.pageLink}
            containerClassName="pagination"
            activeClassName={styles.active}
            renderOnZeroPageCount={null}
            className={styles.reactPaginate}
          />)}
        <div className="row row-cols-xl-3 row-cols-lg-2 row-cols-md-1  w-100 gx-3 ">
          {currentItems.map((article, index) => (
            <div className="col-sm-12 col-sm-6 " key={index}>
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
        {pageCount > 1 && (
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< prev"
            pageClassName="page-item"
            pageLinkClassName={styles.pageLink}
            previousClassName="page-item"
            previousLinkClassName={styles.prev}
            nextClassName="page-item"
            nextLinkClassName={styles.next}
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName={styles.pageLink}
            containerClassName="pagination"
            activeClassName={styles.active}
            renderOnZeroPageCount={null}
            className={styles.reactPaginate}
          />
        )}
      </div>
    </div>
  );
}

export default ArticlesList;
