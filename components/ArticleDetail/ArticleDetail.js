import React from "react";
import Link from "next/link";
import moment from "moment";
import styles from "./ArticleDetail.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import Loader from "../Loader/index";
import { FiExternalLink } from "react-icons/fi";

function ArticleDetail({
  id,
  urlToImage,
  title,
  description,
  publishedAt,
  content,
  url,
  author,
  category,
  query,
}) {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }


  

  const postedAgo = moment(publishedAt).fromNow();

  return (
    <div className={styles.articleDetail}>
      <div className="container card border-0">
        <Image
          src={urlToImage}
          as="image"
          className="card-img-top"
          alt={title}
          layout="responsive"
          width={1200}
          height={765}
          priority
        />

        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">
            <b>{description}</b>
          </p>
          <hr />
          <p className="card-text">
            <small className="text-muted">By: {author}</small>
          </p>
          <p className="card-text">
            <small className="text-muted">Published: {postedAgo}</small>
          </p>

          <p>
            {content.length < 200 ? content : content.slice(0, 200) + "..."}{" "}
            <a href={url} target="_blank" rel="noopener noreferrer">
              Read more from source. <FiExternalLink/>
            </a>
          </p>
          {/* conditionally check if query exists and render different back path */}
          <span>
            {query ? (
              <Link href={`/search?query=${query}`}>
                <button className={styles.goBack}>Go Back</button>
              </Link>
            ) : (
              <Link href={`/${category}`}>
                <button className={styles.goBack}>Go Back</button>
              </Link>
            )}
           
          </span>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;
