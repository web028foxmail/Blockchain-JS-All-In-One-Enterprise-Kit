class AtomicSwap {
  create(secretHash) { return { id: Math.random().toString(36).slice(2), secretHash, status: "INIT" }; }
  redeem(id, secret) { return { id, status: "REDEEMED", secret }; }
}
module.exports = AtomicSwap;
