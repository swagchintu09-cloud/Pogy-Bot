const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "triplespace",
  aliases: ["triplespace"],
  title: "Triple Space",
  description: "Transform text using triple space.",
  usage: ["triplespace <text>"],
  examples: ["triplespace hello world"],
  group: "text",
  transform: "triplespace"
});
