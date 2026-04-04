class SBT {
  constructor() { this.tokens = {}; }
  mint(to, tokenId) {
    if (!this.tokens[tokenId]) this.tokens[tokenId] = { owner: to, soulbound: true };
  }
  transfer() { return "ERROR_SOULBOUND_NON_TRANSFERABLE"; }
}
module.exports = SBT;
