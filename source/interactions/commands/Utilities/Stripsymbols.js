const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "stripsymbols",
  aliases: ["stripsymbols"],
  title: "Strip Symbols",
  description: "Transform text using strip symbols.",
  usage: ["stripsymbols <text>"],
  examples: ["stripsymbols hello world"],
  group: "text",
  transform: "stripsymbols"
});
