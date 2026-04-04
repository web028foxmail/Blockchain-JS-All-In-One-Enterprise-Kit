class SimpleVM {
  constructor() { this.storage = {}; }
  execute(method, key, value) {
    if (method === "set") this.storage[key] = value;
    if (method === "get") return this.storage[key];
    return "EXECUTED";
  }
}
module.exports = new SimpleVM();
