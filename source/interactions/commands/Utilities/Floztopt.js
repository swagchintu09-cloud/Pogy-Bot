const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "floztopt",
  aliases: ["floztopt"],
  title: "Fluid Ounces To Pints",
  description: "Convert fluid ounces to pints.",
  usage: ["floztopt <value>"],
  examples: ["floztopt 10"],
  group: "conversion",
  fromLabel: "Fluid Ounces",
  toLabel: "Pints",
  factor: 0.0625
});
