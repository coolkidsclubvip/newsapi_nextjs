import styles from "./Pagination.module.scss";
import { useState } from "react";
import lodash from "lodash";
import Pagination from "react-bootstrap/Pagination";

function ArticlePagination({ itemsCount, pageSize, handlePageChange,currentPage }) {
  // determine how many pages from items quantity and items per page
  const pageCount = Math.ceil(itemsCount / pageSize);

  // generate an array of all those page numbers
  const pages = lodash.range(1, pageCount + 1);

  // conditional render
  if (pageCount === 1) return null;

  return (
    <>
      <nav className="mt-5 " aria-label="news pagination">
        <Pagination className="justify-content-center">
         
            {pages.map((page, index) => (
              <Pagination.Item
                key={index}
                className={`${
                  page === currentPage ? styles.currentPage : styles.indexedPage
                }`}
                onClick={() => handlePageChange(page)}
              >
                <span className={styles.icon}>{page}</span>
              </Pagination.Item>
            ))}
        
        </Pagination>
      </nav>
    </>
  );
}

export default ArticlePagination;

// <Pagination.First />
//     <Pagination.Prev />
//     <Pagination.Item>{1}</Pagination.Item>
//     <Pagination.Ellipsis />

//     <Pagination.Item>{10}</Pagination.Item>
//     <Pagination.Item>{11}</Pagination.Item>
//     <Pagination.Item active>{12}</Pagination.Item>
//     <Pagination.Item>{13}</Pagination.Item>
//     <Pagination.Item disabled>{14}</Pagination.Item>

//     <Pagination.Ellipsis />
//     <Pagination.Item>{20}</Pagination.Item>
//     <Pagination.Next />
//     <Pagination.Last />
