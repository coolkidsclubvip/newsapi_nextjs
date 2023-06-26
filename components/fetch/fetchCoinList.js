async function fetchCoinList() {
  const res = await fetch("https://api.coinstats.app/public/v1/coins?currency=aud&limit=75");
  const data = await res.json();

  const coins = data.coins;

  return coins;
}

export default fetchCoinList;
