function syncCheck(localHeight, remoteHeight) {
  return { synced: localHeight === remoteHeight, difference: Math.abs(localHeight - remoteHeight) };
}
module.exports = syncCheck;
