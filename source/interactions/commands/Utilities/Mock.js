const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "mock",
  aliases: ["mock"],
  title: "Mock Text",
  description: "Transform text using mock text.",
  usage: ["mock <text>"],
  examples: ["mock hello world"],
  group: "text",
  transform: "mock"
});
