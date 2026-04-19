const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "multiplynums",
  aliases: ["multiplynums"],
  title: "Multiply Numbers",
  description: "Multiply Numbers utility.",
  usage: ["multiplynums <left> <right>"],
  examples: ["multiplynums 10 20"],
  group: "math",
  compute: (left, right) => left * right
});
