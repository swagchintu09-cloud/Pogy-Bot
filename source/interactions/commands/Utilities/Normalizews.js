const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "normalizews",
  aliases: ["normalizews"],
  title: "Normalize Whitespace",
  description: "Transform text using normalize whitespace.",
  usage: ["normalizews <text>"],
  examples: ["normalizews hello world"],
  group: "text",
  transform: "normalizews"
});
