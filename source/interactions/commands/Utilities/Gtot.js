const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gtot",
  aliases: ["gtot"],
  title: "Grams To Metric Tons",
  description: "Convert grams to metric tons.",
  usage: ["gtot <value>"],
  examples: ["gtot 10"],
  group: "conversion",
  fromLabel: "Grams",
  toLabel: "Metric Tons",
  factor: 0.000001
});
