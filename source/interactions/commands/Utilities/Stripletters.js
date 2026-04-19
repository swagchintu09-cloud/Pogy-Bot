const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "stripletters",
  aliases: ["stripletters"],
  title: "Strip Letters",
  description: "Transform text using strip letters.",
  usage: ["stripletters <text>"],
  examples: ["stripletters hello world"],
  group: "text",
  transform: "stripletters"
});
