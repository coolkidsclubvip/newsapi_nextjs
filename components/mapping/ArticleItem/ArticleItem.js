import styles from "./ArticleItem.module.scss";
import Image from "next/image";
import moment from "moment";


function ArticleItem({ urlToImage, title, description, publishedAt }) {
const postedAgo = moment(publishedAt).fromNow();

  return (
    <div id="articleItem" className="card h-100 shadow">
      <div className={styles.articleImage}>
        <Image
          src={urlToImage}
          className="card-img-top"
          alt={title}
          layout="responsive"
          width={1200}
          height={675}

          // sizes="(max-width: 100vw) 100vw, 33vw"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Posted {postedAgo}</small>
      </div>
    </div>
  );
  
}
export default ArticleItem;
