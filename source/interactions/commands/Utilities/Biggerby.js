const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "biggerby",
  aliases: ["biggerby"],
  title: "Bigger By",
  description: "Bigger By utility.",
  usage: ["biggerby <left> <right>"],
  examples: ["biggerby 10 20"],
  group: "math",
  compute: (left, right) => right - left
});
