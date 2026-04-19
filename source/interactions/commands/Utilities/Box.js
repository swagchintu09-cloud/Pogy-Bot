const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "box",
  aliases: ["box"],
  title: "Box Text",
  description: "Transform text using box text.",
  usage: ["box <text>"],
  examples: ["box hello world"],
  group: "text",
  transform: "box"
});
