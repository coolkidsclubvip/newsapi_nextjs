import styles from "./CoinModal.module.scss";
import Card from "react-bootstrap/Card";


function CoinModal({ coin, showModal, closeModal }) {
  return (
    <div>
      <Card className={styles.modal}>
        <Card.Img variant="top" src={coin.icon} />
        <Card.Body>
          <Card.Title>
            {" "}
            <h1>{coin.name}</h1>
          </Card.Title>
          <Card.Text>
            <p> </p>
          </Card.Text>
        </Card.Body>
        <div className={styles.container}>
          <div className="container">
            <div className="row">
              <div className="col ">
                <ul>World Rank: {coin.rank}</ul>
                <ul>symbol: {coin.symbol}</ul>
                <ul>Price: Au${coin.price}</ul>
                <ul>Volume: {coin.volume}</ul>
              </div>
              <div className="col">
                <ul>MarketCap: {coin.marketCap}</ul>
                <ul>Available Supply: {coin.availableSupply}</ul>
                <ul>Total Supply: {coin.totalSupply}</ul>
                <ul>Price Change in Past 1 Hour: {coin.priceChange1h}</ul>
                <ul>Price Change in Past 1 Day: {coin.priceChange1d}</ul>
                <ul>Price Change in Past 1 Week: {coin.priceChange1w}</ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.socialLink}>
          <span>
            <a href={coin.websiteUrl} target="_blank">
              Offical Site
            </a>
          </span>{" "}
          <span>
            <a href={coin.twitterUrl} target="_blank">
              Twitter
            </a>
          </span>
        </div>
        <button onClick={closeModal}>X</button>
      </Card>
    </div>
  );
}

export default CoinModal;
