const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_analyze",
  name: "urlcount",
  aliases: ["urlcount"],
  title: "URL Count",
  description: "Analyze text with url count.",
  usage: ["urlcount <text>"],
  examples: ["urlcount hello world"],
  group: "analysis",
  analyze: "urlcount"
});
