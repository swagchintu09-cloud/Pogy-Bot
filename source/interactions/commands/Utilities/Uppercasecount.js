const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_analyze",
  name: "uppercasecount",
  aliases: ["uppercasecount"],
  title: "Uppercase Count",
  description: "Analyze text with uppercase count.",
  usage: ["uppercasecount <text>"],
  examples: ["uppercasecount hello world"],
  group: "analysis",
  analyze: "uppercasecount"
});
