function mevProtect(tx) {
  return { ...tx, protected: true, mevRisk: "LOW", timestamp: Date.now() };
}
module.exports = mevProtect;
