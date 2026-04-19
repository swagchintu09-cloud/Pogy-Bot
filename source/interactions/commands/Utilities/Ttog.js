const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ttog",
  aliases: ["ttog"],
  title: "Metric Tons To Grams",
  description: "Convert metric tons to grams.",
  usage: ["ttog <value>"],
  examples: ["ttog 10"],
  group: "conversion",
  fromLabel: "Metric Tons",
  toLabel: "Grams",
  factor: 1000000
});
