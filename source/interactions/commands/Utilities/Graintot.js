const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "graintot",
  aliases: ["graintot"],
  title: "Grains To Metric Tons",
  description: "Convert grains to metric tons.",
  usage: ["graintot <value>"],
  examples: ["graintot 10"],
  group: "conversion",
  fromLabel: "Grains",
  toLabel: "Metric Tons",
  factor: 6.479890999999999e-8
});
