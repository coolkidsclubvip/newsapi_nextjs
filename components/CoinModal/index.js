import styles from "./CoinModal.module.scss";
import Card from "react-bootstrap/Card";
import Link from "next/link";

function CoinModal({ coin, showModal, closeModal }) {
  return (
    <div className="container-fluid">
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
              <div className="col align-items-end">
                <ul>
                  <span>Rank: </span>
                  {coin.rank}
                </ul>
                <ul>
                  <span>symbol: </span>
                  {coin.symbol}
                </ul>
                <ul>
                  <span>Price: </span>A${coin.price}
                </ul>
                <ul>
                  <span>Volume:</span> {coin.volume}
                </ul>
                <ul>
                  <span>MarketCap:</span> {coin.marketCap}
                </ul>
              </div>
              <div className="col">
                <ul>
                  <span>Available Supply: </span>
                  {coin.availableSupply}
                </ul>
                <ul>
                  <span>Total Supply: </span>
                  {coin.totalSupply}
                </ul>
                <ul>
                  <span>Price Change in Past 1 Hour:</span> {coin.priceChange1h}
                </ul>
                <ul>
                  <span>Price Change in Past 1 Day: </span>
                  {coin.priceChange1d}
                </ul>
                <ul>
                  <span>Price Change in Past 1 Week: </span>
                  {coin.priceChange1w}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row no-gutters text-center">
          <div className="col col-6">
            {/* <div className={styles.socialLink}> */}

            <a href={coin.websiteUrl} target="_blank">
              Offical Site
            </a>
          </div>
          <div className="col col-6">
            <a href={coin.twitterUrl} target="_blank">
              Twitter
            </a>

            {/* </div> */}
          </div>
        </div>
        <button onClick={closeModal}>X</button>
      </Card>
    </div>
  );
}

export default CoinModal;
