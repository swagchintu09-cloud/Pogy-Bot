const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "floztom3",
  aliases: ["floztom3"],
  title: "Fluid Ounces To Cubic Meters",
  description: "Convert fluid ounces to cubic meters.",
  usage: ["floztom3 <value>"],
  examples: ["floztom3 10"],
  group: "conversion",
  fromLabel: "Fluid Ounces",
  toLabel: "Cubic Meters",
  factor: 0.000029573529562499998
});
