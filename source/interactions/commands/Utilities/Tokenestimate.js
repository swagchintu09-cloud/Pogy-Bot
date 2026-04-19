const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_analyze",
  name: "tokenestimate",
  aliases: ["tokenestimate"],
  title: "Token Estimate",
  description: "Analyze text with token estimate.",
  usage: ["tokenestimate <text>"],
  examples: ["tokenestimate hello world"],
  group: "analysis",
  analyze: "tokenestimate"
});
