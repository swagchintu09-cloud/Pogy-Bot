const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_analyze",
  name: "uniquewords",
  aliases: ["uniquewords"],
  title: "Unique Words",
  description: "Analyze text with unique words.",
  usage: ["uniquewords <text>"],
  examples: ["uniquewords hello world"],
  group: "analysis",
  analyze: "uniquewords"
});
