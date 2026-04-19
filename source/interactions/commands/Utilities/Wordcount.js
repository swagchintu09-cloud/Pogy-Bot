const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_analyze",
  name: "wordcount",
  aliases: ["wordcount"],
  title: "Word Count",
  description: "Analyze text with word count.",
  usage: ["wordcount <text>"],
  examples: ["wordcount hello world"],
  group: "analysis",
  analyze: "wordcount"
});
