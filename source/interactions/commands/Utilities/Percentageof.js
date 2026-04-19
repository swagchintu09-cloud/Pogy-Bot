const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "percentageof",
  aliases: ["percentageof"],
  title: "Percentage Of",
  description: "Percentage Of utility.",
  usage: ["percentageof <left> <right>"],
  examples: ["percentageof 10 20"],
  group: "math",
  compute: (left, right) => left * (right / 100)
});
