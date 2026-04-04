function generateNFTMetadata(tokenId) {
  const traits = ["Fire", "Water", "Earth", "Air", "Ether"];
  const rarity = ["Common", "Rare", "Epic", "Legendary"];
  return {
    name: `NFT #${tokenId}`,
    description: "Blockchain Native NFT",
    image: `ipfs://QmRandom${Math.random().toString(16).slice(2)}`,
    attributes: [
      { trait: traits[Math.floor(Math.random()*5)], rarity: rarity[Math.floor(Math.random()*4)] }
    ]
  };
}
module.exports = generateNFTMetadata;
