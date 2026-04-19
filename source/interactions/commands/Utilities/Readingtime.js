const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_analyze",
  name: "readingtime",
  aliases: ["readingtime"],
  title: "Reading Time",
  description: "Analyze text with reading time.",
  usage: ["readingtime <text>"],
  examples: ["readingtime hello world"],
  group: "analysis",
  analyze: "readingtime"
});
