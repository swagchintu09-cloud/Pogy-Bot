const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "trianglearea",
  aliases: ["trianglearea"],
  title: "Triangle Area",
  description: "Triangle Area utility.",
  usage: ["trianglearea <left> <right>"],
  examples: ["trianglearea 10 20"],
  group: "math",
  compute: (left, right) => (left * right) / 2
});
