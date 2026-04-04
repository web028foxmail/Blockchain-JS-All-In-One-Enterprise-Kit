const crypto = require("crypto");
function generateBlockchainAddress() {
  const privateKey = crypto.randomBytes(32).toString("hex");
  const publicKey = crypto.createECDH("secp256k1").setPrivateKey(privateKey, "hex").getPublicKey().toString("hex");
  const address = crypto.createHash("ripemd160").update(publicKey).digest("hex");
  return { privateKey, publicKey, address: `0x${address}` };
}
module.exports = generateBlockchainAddress;
