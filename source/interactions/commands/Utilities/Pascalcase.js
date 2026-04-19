const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "pascalcase",
  aliases: ["pascalcase"],
  title: "Pascal Case",
  description: "Transform text using pascal case.",
  usage: ["pascalcase <text>"],
  examples: ["pascalcase hello world"],
  group: "text",
  transform: "pascalcase"
});
