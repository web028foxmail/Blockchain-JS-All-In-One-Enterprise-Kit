class RevertProtection {
  constructor() { this.validChain = []; }
  addBlock(block) {
    if (block.previousHash === this.validChain.at(-1)?.hash) this.validChain.push(block);
    else throw new Error("INVALID_BLOCK_REVERT");
  }
}
module.exports = RevertProtection;
