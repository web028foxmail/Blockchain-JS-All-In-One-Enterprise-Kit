const crypto = require("crypto");
function encryptPrivateKey(privateKey, password) {
  const cipher = crypto.createCipher("aes256", password);
  return cipher.update(privateKey, "hex", "hex") + cipher.final("hex");
}
module.exports = { encryptPrivateKey };
