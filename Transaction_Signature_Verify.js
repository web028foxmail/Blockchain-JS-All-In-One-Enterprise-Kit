const crypto = require("crypto");
function signTransaction(data, privateKey) {
  const sign = crypto.createSign("SHA256");
  sign.write(JSON.stringify(data));
  sign.end();
  return sign.sign(privateKey, "hex");
}
function verifyTx(data, signature, publicKey) {
  const verify = crypto.createVerify("SHA256");
  verify.write(JSON.stringify(data));
  verify.end();
  return verify.verify(publicKey, signature, "hex");
}
module.exports = { signTransaction, verifyTx };
