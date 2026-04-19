const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "graintooz",
  aliases: ["graintooz"],
  title: "Grains To Ounces",
  description: "Convert grains to ounces.",
  usage: ["graintooz <value>"],
  examples: ["graintooz 10"],
  group: "conversion",
  fromLabel: "Grains",
  toLabel: "Ounces",
  factor: 0.0022857142857142855
});
