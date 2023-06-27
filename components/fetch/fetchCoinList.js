async function fetchCoinList() {
  const res = await fetch(
    "https://api.coinstats.app/public/v1/coins?currency=aud&limit=75"
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      `Failed to fetch posts - Error ${res.status}: ${data.message}`
    );
  }
  const coins = data.coins;

  return coins;
}

export default fetchCoinList;
