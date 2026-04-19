const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "floztogal",
  aliases: ["floztogal"],
  title: "Fluid Ounces To Gallons",
  description: "Convert fluid ounces to gallons.",
  usage: ["floztogal <value>"],
  examples: ["floztogal 10"],
  group: "conversion",
  fromLabel: "Fluid Ounces",
  toLabel: "Gallons",
  factor: 0.0078125
});
