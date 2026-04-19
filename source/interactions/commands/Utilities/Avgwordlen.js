const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_analyze",
  name: "avgwordlen",
  aliases: ["avgwordlen"],
  title: "Average Word Length",
  description: "Analyze text with average word length.",
  usage: ["avgwordlen <text>"],
  examples: ["avgwordlen hello world"],
  group: "analysis",
  analyze: "avgwordlen"
});
