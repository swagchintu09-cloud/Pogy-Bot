const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_analyze",
  name: "spacecount",
  aliases: ["spacecount"],
  title: "Space Count",
  description: "Analyze text with space count.",
  usage: ["spacecount <text>"],
  examples: ["spacecount hello world"],
  group: "analysis",
  analyze: "spacecount"
});
