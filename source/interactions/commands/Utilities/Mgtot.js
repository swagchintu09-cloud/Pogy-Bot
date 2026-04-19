const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mgtot",
  aliases: ["mgtot"],
  title: "Milligrams To Metric Tons",
  description: "Convert milligrams to metric tons.",
  usage: ["mgtot <value>"],
  examples: ["mgtot 10"],
  group: "conversion",
  fromLabel: "Milligrams",
  toLabel: "Metric Tons",
  factor: 9.999999999999999e-10
});
