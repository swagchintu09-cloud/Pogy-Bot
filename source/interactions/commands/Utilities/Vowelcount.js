const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_analyze",
  name: "vowelcount",
  aliases: ["vowelcount"],
  title: "Vowel Count",
  description: "Analyze text with vowel count.",
  usage: ["vowelcount <text>"],
  examples: ["vowelcount hello world"],
  group: "analysis",
  analyze: "vowelcount"
});
