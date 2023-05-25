import styles from "./LowerHeader.module.scss";
import Link from "next/link";
import UpperHeader from "./UpperHeader";

function LowerHeader() {
  return (
    <div className={styles.header}>
      <nav class="navbar bg-dark text-light navbar-expand-lg data-bs-theme='dark'">
        <span class="navbar-brand" href="#">
          Navbar
        </span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav me-auto mb-2 mb-lg-0 gx-3">
            <Link href="/" className={styles.navlink}>
              <span>Home</span>
            </Link>

            <Link href="/ausnews" className={styles.navlink}>
              <span>AusFeed</span>
            </Link>

            <Link href="/worldnews" className={styles.navlink}>
              <span>GlobeFeed</span>
            </Link>
        
          </div>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default LowerHeader;
