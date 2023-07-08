import { Fragment, useEffect, useState } from "react";
import styles from "./ArticleItem.module.scss";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import Loader from "../../Loader/index";

function ArticleItem({
  urlToImage,
  title,
  description,
  publishedAt,
  url,
  category,
 
}) {
  // Loader effect when loading
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (urlToImage) {
      setIsLoading(false);
    }
  }, [isLoading]);

  const postedAgo = moment(publishedAt).fromNow();

  return (
    <div className={styles.articleItem}>
      {" "}
      <div className="card h-100 border-0 justify-content-center">
        <Link href={`${category}/[articleId]`} as={`${category}/${title}`}>
          <div className={styles.imageContainer}>
            {isLoading === true ? (
              <Loader />
            ) : (
              <Image
                src={urlToImage}
                className={styles.articleImage}
                alt={title}
                // layout="responsive"
                // fill={true}
                layout="intrinsic"
                width={1200}
                height={675}
              />
            )}
          </div>
          <div className="card-body styles.newsBody">
            <h4 className="card-title">
              <b>{title}</b>
            </h4>
            <p className="card-text">{description}</p>
          </div>
        </Link>
        <div className="card-footer">
          <small className="text-body-secondary">Posted {postedAgo}</small>
        </div>
      </div>
    </div>
  );
}
export default ArticleItem;
