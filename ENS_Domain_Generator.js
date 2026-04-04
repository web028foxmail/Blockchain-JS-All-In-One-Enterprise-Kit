function generateENS(name) {
  const hash = require("crypto").createHash("sha256").update(name).digest("hex");
  return `${name}.eth → 0x${hash.slice(0,40)}`;
}
module.exports = generateENS;
