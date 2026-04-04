class Treasury {
  constructor() { this.balance = 0; }
  deposit(amount) { this.balance += amount; }
  withdraw(amount) {
    if (this.balance >= amount) { this.balance -= amount; return true; }
    return false;
  }
}
module.exports = Treasury;
