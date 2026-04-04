class MultiSigWallet {
  constructor(owners, required) {
    this.owners = owners; this.required = required; this.approvals = {};
  }
  approveTx(txId, owner) {
    this.approvals[txId] = [...new Set([...(this.approvals[txId]||[]), owner])];
    return this.approvals[txId].length >= this.required;
  }
}
module.exports = MultiSigWallet;
