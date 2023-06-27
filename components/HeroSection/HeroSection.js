import styles from "./HeroSection.module.scss";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import Loader from "../Loader/index";
import CoinList from "../../components/coinList";
import Image from "next/image";
import banner from "/public/banner.webp";

function HeroSection({ coinData, articles2 }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (articles2 && coinData) {
      setIsLoading(false);
    }
  }, [isLoading]);

  return (
    <Fragment>
      {isLoading === true ? (
        <Loader />
      ) : (
        <div className="container-fluid p-0">
          <div className={styles.heroSection}>
            <div className="row no-gutters">
              <div className="col-md-12 col-lg-6 col-xl-2 g-0 ps-2 text-light">
                <CoinList coinData={coinData} />
              </div>
              <div className="col-md-12 col-lg-12 col-xl-7 gx-0">
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {articles2.map((article, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                      >
                        <Link href="/[articleId]" as={`/${article.title}`}>
                          <Card className="border-0 bg-dark text-light">
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
              <div className="col-md-12 col-lg-6 col-xl-3 g-0 ">
                <div className={styles.banner}>
                  <a href="https://brightrenovation.com.au/" target="blank">
                    <Image
                      src={banner}
                      alt={"banner"}
                      layout="responsive"
                    ></Image>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default HeroSection;
