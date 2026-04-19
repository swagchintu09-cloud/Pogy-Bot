const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "swapcase",
  aliases: ["swapcase"],
  title: "Swap Case",
  description: "Transform text using swap case.",
  usage: ["swapcase <text>"],
  examples: ["swapcase hello world"],
  group: "text",
  transform: "swapcase"
});
