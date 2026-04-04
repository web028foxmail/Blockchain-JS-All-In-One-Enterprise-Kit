class FlashLoan {
  execute(amount, callback) {
    const before = 1000000;
    callback(amount);
    const after = 1000000;
    return { profit: after - before - amount * 0.001, status: "EXECUTED" };
  }
}
module.exports = new FlashLoan();
