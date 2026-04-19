const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "trim",
  aliases: ["trim"],
  title: "Trim Text",
  description: "Transform text using trim text.",
  usage: ["trim <text>"],
  examples: ["trim hello world"],
  group: "text",
  transform: "trim"
});
