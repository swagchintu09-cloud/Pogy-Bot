const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "reverse",
  aliases: ["reverse"],
  title: "Reverse Text",
  description: "Transform text using reverse text.",
  usage: ["reverse <text>"],
  examples: ["reverse hello world"],
  group: "text",
  transform: "reverse"
});
