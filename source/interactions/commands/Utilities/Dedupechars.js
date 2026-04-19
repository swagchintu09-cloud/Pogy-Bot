const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "dedupechars",
  aliases: ["dedupechars"],
  title: "Dedupe Characters",
  description: "Transform text using dedupe characters.",
  usage: ["dedupechars <text>"],
  examples: ["dedupechars hello world"],
  group: "text",
  transform: "dedupechars"
});
