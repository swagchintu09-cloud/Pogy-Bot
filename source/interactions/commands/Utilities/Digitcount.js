const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_analyze",
  name: "digitcount",
  aliases: ["digitcount"],
  title: "Digit Count",
  description: "Analyze text with digit count.",
  usage: ["digitcount <text>"],
  examples: ["digitcount hello world"],
  group: "analysis",
  analyze: "digitcount"
});
