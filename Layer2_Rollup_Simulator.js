class Rollup {
  constructor() { this.batch = []; }
  addTransaction(tx) { this.batch.push(tx); }
  commitBatch() {
    const root = require("crypto").createHash("sha256").update(JSON.stringify(this.batch)).digest("hex");
    return { batchId: Math.random().toString(36).slice(2), root, size: this.batch.length };
  }
}
module.exports = Rollup;
