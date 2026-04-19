const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "dot",
  aliases: ["dot"],
  title: "Dot Text",
  description: "Transform text using dot text.",
  usage: ["dot <text>"],
  examples: ["dot hello world"],
  group: "text",
  transform: "dot"
});
