const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mltom3",
  aliases: ["mltom3"],
  title: "Milliliters To Cubic Meters",
  description: "Convert milliliters to cubic meters.",
  usage: ["mltom3 <value>"],
  examples: ["mltom3 10"],
  group: "conversion",
  fromLabel: "Milliliters",
  toLabel: "Cubic Meters",
  factor: 0.000001
});
