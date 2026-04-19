const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "floztotbsp",
  aliases: ["floztotbsp"],
  title: "Fluid Ounces To Tablespoons",
  description: "Convert fluid ounces to tablespoons.",
  usage: ["floztotbsp <value>"],
  examples: ["floztotbsp 10"],
  group: "conversion",
  fromLabel: "Fluid Ounces",
  toLabel: "Tablespoons",
  factor: 2
});
