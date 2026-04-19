const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "dedupewords",
  aliases: ["dedupewords"],
  title: "Dedupe Words",
  description: "Transform text using dedupe words.",
  usage: ["dedupewords <text>"],
  examples: ["dedupewords hello world"],
  group: "text",
  transform: "dedupewords"
});
