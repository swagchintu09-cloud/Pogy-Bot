const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "subtractnums",
  aliases: ["subtractnums"],
  title: "Subtract Numbers",
  description: "Subtract Numbers utility.",
  usage: ["subtractnums <left> <right>"],
  examples: ["subtractnums 10 20"],
  group: "math",
  compute: (left, right) => left - right
});
