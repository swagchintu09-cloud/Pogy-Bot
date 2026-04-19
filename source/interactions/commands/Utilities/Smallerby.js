const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "smallerby",
  aliases: ["smallerby"],
  title: "Smaller By",
  description: "Smaller By utility.",
  usage: ["smallerby <left> <right>"],
  examples: ["smallerby 10 20"],
  group: "math",
  compute: (left, right) => left - right
});
