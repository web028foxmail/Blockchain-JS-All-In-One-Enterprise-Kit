function parseHeader(raw) {
  return {
    index: raw.slice(0,6),
    hash: raw.slice(6,72),
    prevHash: raw.slice(72,138),
    time: raw.slice(138,150)
  };
}
module.exports = parseHeader;
