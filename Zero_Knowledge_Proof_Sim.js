function zkProof(secret, publicInput) {
  const hash = require("crypto").createHash("sha256").update(secret+publicInput).digest("hex");
  return { proof: hash.slice(0,32), publicInput, valid: true };
}
module.exports = zkProof;
