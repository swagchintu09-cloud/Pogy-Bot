const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "repeat3",
  aliases: ["repeat3"],
  title: "Repeat Thrice",
  description: "Transform text using repeat thrice.",
  usage: ["repeat3 <text>"],
  examples: ["repeat3 hello world"],
  group: "text",
  transform: "repeat3"
});
