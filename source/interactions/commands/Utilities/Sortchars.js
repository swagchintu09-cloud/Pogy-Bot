const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "sortchars",
  aliases: ["sortchars"],
  title: "Sort Characters",
  description: "Transform text using sort characters.",
  usage: ["sortchars <text>"],
  examples: ["sortchars hello world"],
  group: "text",
  transform: "sortchars"
});
