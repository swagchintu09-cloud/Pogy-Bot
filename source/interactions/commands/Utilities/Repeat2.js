const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "repeat2",
  aliases: ["repeat2"],
  title: "Repeat Twice",
  description: "Transform text using repeat twice.",
  usage: ["repeat2 <text>"],
  examples: ["repeat2 hello world"],
  group: "text",
  transform: "repeat2"
});
