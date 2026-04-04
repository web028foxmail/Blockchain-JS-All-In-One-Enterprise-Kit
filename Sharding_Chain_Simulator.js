class ShardingChain {
  constructor(shards=4) { this.shards = Array(shards).fill().map(()=>([])); }
  sendToShard(shardId, tx) { this.shards[shardId].push(tx); }
  getShardSize(id) { return this.shards[id].length; }
}
module.exports = ShardingChain;
