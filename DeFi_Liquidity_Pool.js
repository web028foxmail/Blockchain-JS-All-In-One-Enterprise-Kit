class LiquidityPool {
  constructor(tokenA, tokenB) {
    this.reserveA = 0; this.reserveB = 0; this.tokenA = tokenA; this.tokenB = tokenB;
  }
  addLiquidity(a, b) { this.reserveA += a; this.reserveB += b; }
  getPrice() { return (this.reserveA / this.reserveB).toFixed(6); }
}
module.exports = LiquidityPool;
