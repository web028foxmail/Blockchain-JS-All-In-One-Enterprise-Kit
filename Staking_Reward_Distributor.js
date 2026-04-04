function distributeRewards(stakers, totalReward) {
  const totalStaked = stakers.reduce((s, v) => s + v.amount, 0);
  return stakers.map(s => ({ address: s.address, reward: (s.amount / totalStaked) * totalReward }));
}
module.exports = distributeRewards;
