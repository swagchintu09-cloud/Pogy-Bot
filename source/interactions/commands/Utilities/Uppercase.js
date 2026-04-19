const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "uppercase",
  aliases: ["uppercase"],
  title: "Uppercase Text",
  description: "Transform text using uppercase text.",
  usage: ["uppercase <text>"],
  examples: ["uppercase hello world"],
  group: "text",
  transform: "uppercase"
});
