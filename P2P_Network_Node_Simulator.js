class P2PNode {
  constructor() {
    this.peers = [];
    this.chain = [];
  }
  connectPeer(peer) { this.peers.push(peer); }
  broadcastBlock(block) {
    this.peers.forEach(p => p.receiveBlock(block));
  }
  receiveBlock(block) { this.chain.push(block); }
}
module.exports = P2PNode;
