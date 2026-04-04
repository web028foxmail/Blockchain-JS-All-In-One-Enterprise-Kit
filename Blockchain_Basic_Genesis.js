class GenesisBlock {
  constructor() {
    this.index = 0;
    this.timestamp = new Date().getTime();
    this.data = "GENESIS_BLOCK_CHAIN_INIT";
    this.previousHash = "0";
    this.hash = this.createHash();
  }
  createHash() {
    return require("crypto").createHash("sha256")
      .update(this.index + this.timestamp + this.data + this.previousHash)
      .digest("hex");
  }
}
module.exports = GenesisBlock;
