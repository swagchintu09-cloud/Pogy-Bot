const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_analyze",
  name: "lowercasecount",
  aliases: ["lowercasecount"],
  title: "Lowercase Count",
  description: "Analyze text with lowercase count.",
  usage: ["lowercasecount <text>"],
  examples: ["lowercasecount hello world"],
  group: "analysis",
  analyze: "lowercasecount"
});
