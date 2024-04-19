import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import styles from "./ArticleList.module.scss";
import ArticleItem from "../ArticleItem/ArticleItem";
import { useRouter } from "next/router";

function ArticlesList({ articles1, category }) {
  const [isHomePage, setIsHomePage] = useState(false);

  // React-paginate is below:
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 15;
  // Simulate fetching items from another resources.

  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = articles1.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(articles1.length / itemsPerPage);

  const router = useRouter();
  // 判断当前页面是否是主页
  useEffect(() => {
    setIsHomePage(router.pathname === "/");
    
  }, []);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % articles1.length;

    setItemOffset(newOffset);

    // 判断是否为首页
    if (isHomePage) {
      // 如果是首页，滚动到顶部下方 110vh 的位置
      window.scrollTo({ top: window.innerHeight * 1.1, behavior: "smooth" });
    } else {
      // 如果不是首页，滚动到页面顶部
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Last current page articles' index number is:
  const lastIndex = currentItems.length - 1;
console.log("isHomepage is:", isHomePage);
  return (
    <div className="container-fluid p-0">
      <div className={styles.articlesList}>
        <div
          className={styles.pageBanner}
          style={{
            backgroundImage: `url(${currentItems[lastIndex].urlToImage} )`,
          }}
        >
          <p>{`${
            category.length === 0
              ? "International Headlines"
              : category === "aunews"
              ? "Australian News"
              : category === "USnews"
              ? "American News"
              : "Search Results"
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
