function generateIPFSHash(data) {
  const hash = require("crypto").createHash("sha256").update(data).digest("hex");
  return `Qm${hash.slice(0,44)}`;
}
module.exports = generateIPFSHash;
