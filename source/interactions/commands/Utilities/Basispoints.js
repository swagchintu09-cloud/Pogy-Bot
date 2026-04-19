const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "basispoints",
  aliases: ["basispoints"],
  title: "Basis Points",
  description: "Basis Points utility.",
  usage: ["basispoints <value>"],
  examples: ["basispoints 42"],
  group: "math",
  compute: (value) => value * 10000
});
