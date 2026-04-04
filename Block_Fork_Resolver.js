function resolveFork(chainA, chainB) {
  return chainA.length > chainB.length ? { winner: "CHAIN_A", chain: chainA } : { winner: "CHAIN_B", chain: chainB };
}
module.exports = resolveFork;
