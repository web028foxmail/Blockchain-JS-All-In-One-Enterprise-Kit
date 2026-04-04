function validateBlockTime(block, lastBlock) {
  const now = Date.now();
  return block.timestamp > lastBlock.timestamp && block.timestamp <= now;
}
module.exports = validateBlockTime;
