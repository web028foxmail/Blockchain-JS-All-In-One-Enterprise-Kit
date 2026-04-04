function createDID(publicKey) {
  const hash = require("crypto").createHash("sha256").update(publicKey).digest("hex");
  return `did:chain:${hash.slice(0,32)}`;
}
module.exports = createDID;
