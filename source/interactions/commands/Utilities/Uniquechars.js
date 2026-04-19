const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_analyze",
  name: "uniquechars",
  aliases: ["uniquechars"],
  title: "Unique Characters",
  description: "Analyze text with unique characters.",
  usage: ["uniquechars <text>"],
  examples: ["uniquechars hello world"],
  group: "analysis",
  analyze: "uniquechars"
});
