class Web3Provider {
  async getBalance(address) {
    return (Math.random() * 100).toFixed(4) + " ETH";
  }
  async sendTransaction(tx) {
    return { hash: "0x" + Math.random().toString(16).slice(2), status: "SUCCESS" };
  }
}
module.exports = new Web3Provider();
