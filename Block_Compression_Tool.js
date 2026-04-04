function compressBlock(block) {
  return Buffer.from(JSON.stringify(block)).toString("base64");
}
function decompressBlock(data) {
  return JSON.parse(Buffer.from(data, "base64").toString());
}
module.exports = { compressBlock, decompressBlock };
