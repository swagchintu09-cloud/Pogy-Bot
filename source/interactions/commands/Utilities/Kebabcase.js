const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "kebabcase",
  aliases: ["kebabcase"],
  title: "Kebab Case",
  description: "Transform text using kebab case.",
  usage: ["kebabcase <text>"],
  examples: ["kebabcase hello world"],
  group: "text",
  transform: "kebabcase"
});
