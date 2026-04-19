const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "doublespace",
  aliases: ["doublespace"],
  title: "Double Space",
  description: "Transform text using double space.",
  usage: ["doublespace <text>"],
  examples: ["doublespace hello world"],
  group: "text",
  transform: "doublespace"
});
