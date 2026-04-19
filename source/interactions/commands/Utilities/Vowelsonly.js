const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "vowelsonly",
  aliases: ["vowelsonly"],
  title: "Vowels Only",
  description: "Transform text using vowels only.",
  usage: ["vowelsonly <text>"],
  examples: ["vowelsonly hello world"],
  group: "text",
  transform: "vowelsonly"
});
