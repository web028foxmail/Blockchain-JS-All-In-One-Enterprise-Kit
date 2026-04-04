function estimateGas(operationType) {
  const gasTable = { transfer: 21000, deploy: 1000000, call: 50000 };
  return gasTable[operationType] || 30000;
}
module.exports = estimateGas;
