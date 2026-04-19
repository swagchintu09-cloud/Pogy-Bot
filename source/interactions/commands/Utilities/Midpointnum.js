const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "midpointnum",
  aliases: ["midpointnum"],
  title: "Midpoint",
  description: "Midpoint utility.",
  usage: ["midpointnum <left> <right>"],
  examples: ["midpointnum 10 20"],
  group: "math",
  compute: (left, right) => (left + right) / 2
});
