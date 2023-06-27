import styles from "./coins.module.scss";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import CoinModal from "../../../components/CoinModal";

function CoinList({ coinData }) {
  // React-paginate is below:
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = coinData.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(coinData.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % coinData.length;

    setItemOffset(newOffset);
  };

  // Coin Model Event
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState({});

// handle coin search click
const handleCoinSearch = () => {
  const filteredCoins = coinData.filter((coin) =>
    coin.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  if (filteredCoins.length > 0) {
    setSelectedCoin(filteredCoins[0]);
    setShowModal(true);
  }
};



  return (
    <div className={styles.coinContainer}>
      <h4>
        <b>Crypto Price Watch</b>
      </h4>
      {/* input bar */}
      <input
        type="search"
        placeholder="coin name"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        className={styles.input}
      ></input>
      <button className={styles.customButton } name="coin" onClick={handleCoinSearch}>
        Search
      </button>
      <hr />
      {currentItems &&
        currentItems.map((coin) => {
          return (
            <>
              <p
                key={coin.name}
                //give each coin a click event
                onClick={() => {
                  setSelectedCoin(coin);
                  setShowModal(true);
                }}
              >
                <img src={coin.icon} />
                <b> {coin.name} </b>
                A${coin.price}
              </p>
              <br />
            </>
          );
        })}

      {showModal && (
        <CoinModal
          coin={selectedCoin}
          showModal={showModal}
          closeModal={() => setShowModal(false)}
        />
      )}
      <div className={styles.coinPagination}>
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default CoinList;
