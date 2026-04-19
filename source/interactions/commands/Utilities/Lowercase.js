const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "lowercase",
  aliases: ["lowercase"],
  title: "Lowercase Text",
  description: "Transform text using lowercase text.",
  usage: ["lowercase <text>"],
  examples: ["lowercase hello world"],
  group: "text",
  transform: "lowercase"
});
