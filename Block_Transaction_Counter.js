function countTxInBlock(block) {
  return block.transactions ? block.transactions.length : 0;
}
module.exports = countTxInBlock;
