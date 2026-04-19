const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_analyze",
  name: "symbolcount",
  aliases: ["symbolcount"],
  title: "Symbol Count",
  description: "Analyze text with symbol count.",
  usage: ["symbolcount <text>"],
  examples: ["symbolcount hello world"],
  group: "analysis",
  analyze: "symbolcount"
});
