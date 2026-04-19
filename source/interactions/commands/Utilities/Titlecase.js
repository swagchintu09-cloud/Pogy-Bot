const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "titlecase",
  aliases: ["titlecase"],
  title: "Title Case",
  description: "Transform text using title case.",
  usage: ["titlecase <text>"],
  examples: ["titlecase hello world"],
  group: "text",
  transform: "titlecase"
});
