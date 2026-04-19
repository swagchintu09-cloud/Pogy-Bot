const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "alterncase",
  aliases: ["alterncase"],
  title: "Alternate Case",
  description: "Transform text using alternate case.",
  usage: ["alterncase <text>"],
  examples: ["alterncase hello world"],
  group: "text",
  transform: "alterncase"
});
