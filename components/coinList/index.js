import styles from "./coinList.module.scss";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import CoinModal from "../../components/CoinModal";

function CoinList({ coinData }) {
  // React-paginate is below:
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 16;
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
  const handleCoinSearch = (e) => {
    e.preventDefault();
    const filteredCoins = coinData.filter((coin) =>
      coin.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    if (filteredCoins.length > 0) {
      setSelectedCoin(filteredCoins[0]);
      setShowModal(true);
    } else if (filteredCoins.length === 0) { alert("Please enter a valid coin name"); } 
  };

  return (
    <div className={styles.coinContainer}>
      <h2>
        Crypto Price Watch
      </h2>
      {/* input bar */}
      <form onSubmit={handleCoinSearch}>
      <input
        type="search"
        placeholder="Crypto Name..."
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        className={styles.input}
      ></input>
      </form>
     
    
      {currentItems &&
        currentItems.map((coin) => {
          return (
            <>
              <ul className={styles.coinList}
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
              </ul>
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
          pageRangeDisplayed={2}
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
