class ValidatorSet {
  constructor() { this.validators = new Set(); }
  add(addr) { this.validators.add(addr); }
  remove(addr) { this.validators.delete(addr); }
  isActive(addr) { return this.validators.has(addr); }
}
module.exports = ValidatorSet;
