const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_analyze",
  name: "charcount",
  aliases: ["charcount"],
  title: "Character Count",
  description: "Analyze text with character count.",
  usage: ["charcount <text>"],
  examples: ["charcount hello world"],
  group: "analysis",
  analyze: "charcount"
});
