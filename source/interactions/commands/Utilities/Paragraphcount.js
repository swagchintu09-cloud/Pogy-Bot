const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_analyze",
  name: "paragraphcount",
  aliases: ["paragraphcount"],
  title: "Paragraph Count",
  description: "Analyze text with paragraph count.",
  usage: ["paragraphcount <text>"],
  examples: ["paragraphcount hello world"],
  group: "analysis",
  analyze: "paragraphcount"
});
