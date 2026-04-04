class PoS {
  constructor() { this.validators = []; }
  registerValidator(address, stake) {
    this.validators.push({ address, stake });
  }
  selectValidator() {
    const total = this.validators.reduce((s, v) => s + v.stake, 0);
    let rand = Math.random() * total;
    for (const v of this.validators) {
      rand -= v.stake;
      if (rand <= 0) return v.address;
    }
  }
}
module.exports = new PoS();
