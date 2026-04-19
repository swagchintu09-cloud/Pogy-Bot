const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "areasquare",
  aliases: ["areasquare"],
  title: "Rectangle Area",
  description: "Rectangle Area utility.",
  usage: ["areasquare <left> <right>"],
  examples: ["areasquare 10 20"],
  group: "math",
  compute: (left, right) => left * right
});
