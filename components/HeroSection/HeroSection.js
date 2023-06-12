import styles from "./HeroSection.module.scss";
import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";

function HeroSection({ articles2 }) {
  return (
    <div className={styles.heroSection}>
      {/* <div className="container-fluid"> */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {articles2.map((article, index) => (
            <Fragment key={index}>
              <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <Link href="/[articleId]" as={`/${article.title}`}>
                  <Image
                    src={article.urlToImage}
                    className="d-block w-100"
                    alt={article.title}
                    layout="responsive"
                    width={1200}
                    height={675}
                    loading="eager"
                  />
                  <div className="carousel-caption  d-md-block">
                    <div className={styles.hero_caption}>
                      <p>{article.title}</p>
                      {/* <p>{article.description}</p> */}
                    </div>
                  </div>
                </Link>
              </div>
            </Fragment>
          ))}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    // </div>
  );
}

export default HeroSection;
