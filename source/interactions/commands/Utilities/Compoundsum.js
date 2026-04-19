const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "compoundsum",
  aliases: ["compoundsum"],
  title: "Compound Sum",
  description: "Compound Sum utility.",
  usage: ["compoundsum <left> <right>"],
  examples: ["compoundsum 10 20"],
  group: "math",
  compute: (left, right) => (left + right) ** 2
});
