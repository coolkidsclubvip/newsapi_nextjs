import { useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./ArticleList.module.scss";
import ArticleItem from "../ArticleItem/ArticleItem";

function ArticlesList({ articles1, category }) {
  // React-paginate is below:
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 15;
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
    <div className="container-fluid p-0">
      <div className={styles.articlesList}>
        <div
          className={styles.pageBanner}
          style={{ backgroundImage: `url(${currentItems[0].urlToImage} )` }}
        >
          <p>{`${
            category.length === 0 ? "International Headlines" : category
          }`}</p>
        </div>
        <div className="row no-gutters row-cols-xl-3 row-cols-lg-2 row-cols-md-1  w-100 gx-3 ">
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
        <div className={styles.reactPaginate}>
          {pageCount > 1 && (
            <ReactPaginate
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              previousLabel="< prev"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ArticlesList;
