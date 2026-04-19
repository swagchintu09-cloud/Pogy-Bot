const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "camelcase",
  aliases: ["camelcase"],
  title: "Camel Case",
  description: "Transform text using camel case.",
  usage: ["camelcase <text>"],
  examples: ["camelcase hello world"],
  group: "text",
  transform: "camelcase"
});
