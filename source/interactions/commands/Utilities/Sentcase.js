const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "sentcase",
  aliases: ["sentcase"],
  title: "Sentence Case",
  description: "Transform text using sentence case.",
  usage: ["sentcase <text>"],
  examples: ["sentcase hello world"],
  group: "text",
  transform: "sentcase"
});
