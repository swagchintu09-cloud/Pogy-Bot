const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "spaced",
  aliases: ["spaced"],
  title: "Spaced Text",
  description: "Transform text using spaced text.",
  usage: ["spaced <text>"],
  examples: ["spaced hello world"],
  group: "text",
  transform: "spaced"
});
