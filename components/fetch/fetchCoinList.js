async function fetchCoinList() {
  let coins;
  const sdk = require("api")("@coinstatsopenapi/v1.0#345g3s337lsj11623");

  sdk.auth(`${process.env.NEXT_PUBLIC_COIN_API_KEY}`);
  
  try {
    const response = await sdk.coinController_coinList();
    coins = response.data.result;
 
    return coins;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default fetchCoinList;
