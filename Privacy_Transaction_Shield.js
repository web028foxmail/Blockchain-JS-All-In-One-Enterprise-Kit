function shieldTransaction(amount, address) {
  const masked = `***${address.slice(-4)}`;
  const hiddenAmount = "HIDDEN_AMOUNT";
  return { maskedAddress: masked, hiddenAmount, nonce: Math.random().toString(36).slice(2) };
}
module.exports = shieldTransaction;
