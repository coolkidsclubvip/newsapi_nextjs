import styles from "./LowerHeader.module.scss";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

function LowerHeader() {
  // Get user query and fetch and render a new page
  const [query, setQuery] = useState("");

  const router = useRouter();

  // update query when input is changed
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const clickHandler = async (e) => {
    e.preventDefault();
    if (!query) {
      return;
    } else if (typeof query === "string") {
      router.push({
        pathname: "/search",
        query: { query: query }, //Next.js expects query parameters to be strings
      });
    }
  };

  return (
    <div className={styles.header}>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
        <div className="navbar-brand" href="#">
          <Link href="/">
            <span className={styles.navBrand}>NUTS NEWS</span>
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className={`collapse navbar-collapse ${styles.dropMenu}`} id="navbarSupportedContent">
          <div className="navbar-nav me-auto mb-2 mb-lg-0 gx-3">
            <Link href="/" className={styles.navlink}>
              <span>Home</span>
            </Link>

            <Link href="/aunews" className={styles.navlink}>
              <span>Australian</span>
            </Link>

            <Link href="/USnews" className={styles.navlink}>
              <span>American</span>
            </Link>
          </div>
          <div className={styles.form}>
            <form className="d-flex" role="search" onSubmit={clickHandler}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="News keywords..."
                aria-label="Search"
                onChange={handleChange}
              />
              <button className={styles.customButton} type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LowerHeader;
