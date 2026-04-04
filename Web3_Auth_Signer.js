function web3AuthSign(message, privateKey) {
  return require("crypto").createHmac("sha256", privateKey).update(message).digest("hex");
}
module.exports = web3AuthSign;
