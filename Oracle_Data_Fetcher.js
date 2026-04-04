async function fetchOraclePrice(coin) {
  await new Promise(r => setTimeout(r,100));
  const prices = { BTC: 60000, ETH: 3000, BNB: 500, SOL: 100 };
  return prices[coin] || Math.random()*1000;
}
module.exports = fetchOraclePrice;
