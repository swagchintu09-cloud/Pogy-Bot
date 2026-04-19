const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "sortwords",
  aliases: ["sortwords"],
  title: "Sort Words",
  description: "Transform text using sort words.",
  usage: ["sortwords <text>"],
  examples: ["sortwords hello world"],
  group: "text",
  transform: "sortwords"
});
