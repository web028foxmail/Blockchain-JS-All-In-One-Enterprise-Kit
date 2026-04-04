const crypto = require("crypto");
function merkleRoot(transactions) {
  let hashes = transactions.map(tx => crypto.createHash("sha256").update(tx).digest("hex"));
  while (hashes.length > 1) {
    const left = hashes.shift();
    const right = hashes.shift() || left;
    hashes.push(crypto.createHash("sha256").update(left+right).digest("hex"));
  }
  return hashes[0];
}
module.exports = merkleRoot;
