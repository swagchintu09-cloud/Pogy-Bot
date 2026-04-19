const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kgtot",
  aliases: ["kgtot"],
  title: "Kilograms To Metric Tons",
  description: "Convert kilograms to metric tons.",
  usage: ["kgtot <value>"],
  examples: ["kgtot 10"],
  group: "conversion",
  fromLabel: "Kilograms",
  toLabel: "Metric Tons",
  factor: 0.001
});
