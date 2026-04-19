const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_analyze",
  name: "linecount",
  aliases: ["linecount"],
  title: "Line Count",
  description: "Analyze text with line count.",
  usage: ["linecount <text>"],
  examples: ["linecount hello world"],
  group: "analysis",
  analyze: "linecount"
});
