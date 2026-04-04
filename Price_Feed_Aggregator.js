function priceAggregate(feeds) {
  const avg = feeds.reduce((s,p)=>s+p,0)/feeds.length;
  return { average: avg.toFixed(2), sources: feeds.length };
}
module.exports = priceAggregate;
