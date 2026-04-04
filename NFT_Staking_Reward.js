function nftStakeReward(stakeDays, rarity) {
  const mul = { Common:1, Rare:2, Epic:5, Legendary:10 };
  return stakeDays * mul[rarity] * 0.1;
}
module.exports = nftStakeReward;
