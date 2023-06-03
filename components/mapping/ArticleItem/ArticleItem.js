import styles from "./ArticleItem.module.scss";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import Loader from "../../Loader/index";

function ArticleItem(props) {
  const { urlToImage, title, description, publishedAt, url, category } = props;
  const postedAgo = moment(publishedAt).fromNow();

  return (
    <div className={styles.articleItem}>
      {!props ? (
        <Loader />
      ) : (
        <div className="card h-100 shadow border-0">
          <Link href={`${category}[articleId]`} as={`${category}${title}`}>
            <div className={styles.imageContainer}>
              <Image
                src={urlToImage}
                className={styles.articleImage}
                alt={title}
                layout="intrinsic"
                width={1200}
                height={675}
              />
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
      )}
    </div>
  );
}
export default ArticleItem;
