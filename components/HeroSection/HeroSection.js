
import styles from "./HeroSection.module.scss";
import Image from "next/image";
import { Fragment } from "react";

function HeroSection({ articles2 }) {

  return (
    <div className={styles.heroSection}>
      <div className="container-fluid">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            {articles2.map((article, index) => (
              <Fragment key={index}>
                <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <Image
                    src={article.urlToImage}
                    class="d-block w-100"
                    alt={article.title}
                    layout="responsive"
                    width={1200}
                    height={675}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <div className={styles.hero_caption}>
                      <h1>{article.title}</h1>
                      <p>{article.description}</p>
                    </div>
                  </div>
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
    </div>
  );
}

export default HeroSection;
