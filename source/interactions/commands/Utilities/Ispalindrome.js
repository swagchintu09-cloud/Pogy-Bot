const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_analyze",
  name: "ispalindrome",
  aliases: ["ispalindrome"],
  title: "Palindrome Check",
  description: "Analyze text with palindrome check.",
  usage: ["ispalindrome <text>"],
  examples: ["ispalindrome hello world"],
  group: "analysis",
  analyze: "ispalindrome"
});
