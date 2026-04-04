function adjustDifficulty(lastBlock, timestamp, targetTime) {
  const timeDiff = timestamp - lastBlock.timestamp;
  return timeDiff < targetTime ? lastBlock.difficulty + 1 : Math.max(lastBlock.difficulty - 1, 1);
}
module.exports = adjustDifficulty;
