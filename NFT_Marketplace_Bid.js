class NFTBid {
  constructor() { this.bids = {}; }
  placeBid(nftId, bidder, price) {
    this.bids[nftId] = this.bids[nftId] || [];
    this.bids[nftId].push({ bidder, price, time: Date.now() });
  }
  getHighest(nftId) {
    return this.bids[nftId]?.sort((a,b)=>b.price-a.price)[0] || null;
  }
}
module.exports = NFTBid;
