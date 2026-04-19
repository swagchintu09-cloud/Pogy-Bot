const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "initials",
  aliases: ["initials"],
  title: "Initials",
  description: "Transform text using initials.",
  usage: ["initials <text>"],
  examples: ["initials hello world"],
  group: "text",
  transform: "initials"
});
