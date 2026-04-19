const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "text_transform",
  name: "snakecase",
  aliases: ["snakecase"],
  title: "Snake Case",
  description: "Transform text using snake case.",
  usage: ["snakecase <text>"],
  examples: ["snakecase hello world"],
  group: "text",
  transform: "snakecase"
});
