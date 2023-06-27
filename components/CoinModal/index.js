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
                <ul><span>World Rank: </span>{coin.rank}</ul>
                <ul><span>symbol: </span>{coin.symbol}</ul>
                <ul><span>Price: </span>A${coin.price}</ul>
                <ul><span>Volume:</span> {coin.volume}</ul>
              </div>
              <div className="col">
                <ul><span>MarketCap:</span> {coin.marketCap}</ul>
                <ul><span>Available Supply: </span>{coin.availableSupply}</ul>
                <ul><span>Total Supply: </span>{coin.totalSupply}</ul>
                <ul><span>Price Change in Past 1 Hour:</span> {coin.priceChange1h}</ul>
                <ul><span>Price Change in Past 1 Day: </span>{coin.priceChange1d}</ul>
                <ul><span>Price Change in Past 1 Week: </span>{coin.priceChange1w}</ul>
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