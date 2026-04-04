const crypto = require("crypto");
function encryptMessage(msg, key) {
  return crypto.createCipher("aes128", key).update(msg, "utf8", "hex");
}
function decryptMessage(enc, key) {
  return crypto.createDecipher("aes128", key).update(enc, "hex", "utf8");
}
module.exports = { encryptMessage, decryptMessage };
