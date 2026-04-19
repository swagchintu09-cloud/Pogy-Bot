const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "onlysymbols",
  aliases: ["onlysymbols"],
  title: "Only Symbols",
  description: "Transform text using only symbols.",
  usage: ["onlysymbols <text>"],
  examples: ["onlysymbols hello world"],
  group: "text",
  transform: "onlysymbols"
});
