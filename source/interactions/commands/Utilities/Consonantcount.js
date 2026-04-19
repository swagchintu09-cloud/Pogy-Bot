const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_analyze",
  name: "consonantcount",
  aliases: ["consonantcount"],
  title: "Consonant Count",
  description: "Analyze text with consonant count.",
  usage: ["consonantcount <text>"],
  examples: ["consonantcount hello world"],
  group: "analysis",
  analyze: "consonantcount"
});
