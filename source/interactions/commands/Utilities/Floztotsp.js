const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "floztotsp",
  aliases: ["floztotsp"],
  title: "Fluid Ounces To Teaspoons",
  description: "Convert fluid ounces to teaspoons.",
  usage: ["floztotsp <value>"],
  examples: ["floztotsp 10"],
  group: "conversion",
  fromLabel: "Fluid Ounces",
  toLabel: "Teaspoons",
  factor: 6
});
