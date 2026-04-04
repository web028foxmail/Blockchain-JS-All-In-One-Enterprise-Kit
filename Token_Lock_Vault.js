class TokenVault {
  constructor() { this.locks = {}; }
  lock(addr, amount, unlockTime) {
    this.locks[addr] = { amount, unlockTime, locked: true };
  }
  claim(addr) {
    const l = this.locks[addr];
    if (l && Date.now() > l.unlockTime) return { ...l, locked: false };
    return "LOCKED";
  }
}
module.exports = TokenVault;
