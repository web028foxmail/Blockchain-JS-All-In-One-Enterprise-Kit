class SimpleMiner {
  mineBlock(lastBlock, data) {
    let nonce = 0;
    let hash;
    do {
      nonce++;
      hash = require("crypto").createHash("sha256")
        .update(lastBlock.hash + nonce + JSON.stringify(data)).digest("hex");
    } while (!hash.startsWith("0000"));
    return { index: lastBlock.index + 1, nonce, hash, data };
  }
}
module.exports = new SimpleMiner();
