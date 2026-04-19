const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "constantcase",
  aliases: ["constantcase"],
  title: "Constant Case",
  description: "Transform text using constant case.",
  usage: ["constantcase <text>"],
  examples: ["constantcase hello world"],
  group: "text",
  transform: "constantcase"
});
