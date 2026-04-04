function inspectChain(chain) {
  return {
    height: chain.length,
    lastHash: chain.at(-1)?.hash || "NO_BLOCK",
    totalTx: chain.reduce((s,b)=>s+(b.transactions?.length||0),0),
    valid: chain.every((b,i)=>i===0||b.previousHash===chain[i-1].hash)
  };
}
module.exports = inspectChain;
