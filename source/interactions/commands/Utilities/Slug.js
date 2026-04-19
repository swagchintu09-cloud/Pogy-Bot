const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "slug",
  aliases: ["slug"],
  title: "Slug Text",
  description: "Transform text using slug text.",
  usage: ["slug <text>"],
  examples: ["slug hello world"],
  group: "text",
  transform: "slug"
});
