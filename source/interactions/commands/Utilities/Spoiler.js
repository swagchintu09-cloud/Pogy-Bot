const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "spoiler",
  aliases: ["spoiler"],
  title: "Spoiler Text",
  description: "Transform text using spoiler text.",
  usage: ["spoiler <text>"],
  examples: ["spoiler hello world"],
  group: "text",
  transform: "spoiler"
});
