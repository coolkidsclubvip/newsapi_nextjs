import styles from "./HeroSection.module.scss";
import { Fragment } from "react";
import Link from "next/link";
import Card from "react-bootstrap/Card";

function HeroSection({ articles2 }) {

  return (
    <Fragment>
      <div className={styles.heroSection}>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {articles2.map((article, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <Link href="/[articleId]" as={`/${article.title}`}>
                  <Card className="border-0 ">
                
                      <Card.Img
                        variant="top"
                        src={article.urlToImage}
                        className="d-block w-100"
                        alt={article.title}
                      />
                      <Card.Body>
                        <Card.Text className={styles.hero_caption}>
                          <b>{article.title}</b>
                        </Card.Text>
                      </Card.Body>
                   
                  </Card>
                </Link>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default HeroSection;
