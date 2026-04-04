async function vrfRandom(seed) {
  await new Promise(r => setTimeout(r,50));
  const hash = require("crypto").createHash("sha256").update(seed+Date.now()).digest("hex");
  return parseInt(hash.slice(0,16),16) % 1000000;
}
module.exports = vrfRandom;
