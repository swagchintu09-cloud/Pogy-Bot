const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "doublecompare",
  aliases: ["doublecompare"],
  title: "Double Compare",
  description: "Double Compare utility.",
  usage: ["doublecompare <left> <right>"],
  examples: ["doublecompare 10 20"],
  group: "math",
  compute: (left, right) => (left * 2) - right
});
