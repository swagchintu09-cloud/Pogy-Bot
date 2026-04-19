const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "consonantsonly",
  aliases: ["consonantsonly"],
  title: "Consonants Only",
  description: "Transform text using consonants only.",
  usage: ["consonantsonly <text>"],
  examples: ["consonantsonly hello world"],
  group: "text",
  transform: "consonantsonly"
});
