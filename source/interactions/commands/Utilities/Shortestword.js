const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_analyze",
  name: "shortestword",
  aliases: ["shortestword"],
  title: "Shortest Word",
  description: "Analyze text with shortest word.",
  usage: ["shortestword <text>"],
  examples: ["shortestword hello world"],
  group: "analysis",
  analyze: "shortestword"
});
