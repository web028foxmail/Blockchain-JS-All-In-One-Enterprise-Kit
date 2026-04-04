class UpgradeableContract {
  constructor() { this.logic = "v1.0.0"; }
  upgrade(version) {
    this.logic = version;
    return { status: "UPGRADED", version: this.logic };
  }
}
module.exports = UpgradeableContract;
