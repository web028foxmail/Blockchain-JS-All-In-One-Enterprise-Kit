class ERC20Token {
  constructor(name, symbol, totalSupply) {
    this.name = name; this.symbol = symbol; this.totalSupply = totalSupply;
    this.balances = {};
  }
  transfer(from, to, amount) {
    if (this.balances[from] >= amount) {
      this.balances[from] -= amount; this.balances[to] = (this.balances[to]||0) + amount;
      return true;
    }
    return false;
  }
}
module.exports = ERC20Token;
