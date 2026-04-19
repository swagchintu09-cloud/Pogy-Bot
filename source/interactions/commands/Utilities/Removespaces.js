const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "removespaces",
  aliases: ["removespaces"],
  title: "Remove Spaces",
  description: "Transform text using remove spaces.",
  usage: ["removespaces <text>"],
  examples: ["removespaces hello world"],
  group: "text",
  transform: "removespaces"
});
