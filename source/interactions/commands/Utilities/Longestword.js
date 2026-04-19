const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_analyze",
  name: "longestword",
  aliases: ["longestword"],
  title: "Longest Word",
  description: "Analyze text with longest word.",
  usage: ["longestword <text>"],
  examples: ["longestword hello world"],
  group: "analysis",
  analyze: "longestword"
});
