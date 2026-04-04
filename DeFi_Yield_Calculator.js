function yieldCalculator(principal, apy, days) {
  const dailyRate = apy / 365 / 100;
  const earnings = principal * dailyRate * days;
  return { total: principal + earnings, earnings };
}
module.exports = yieldCalculator;
