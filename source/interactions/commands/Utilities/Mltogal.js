const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mltogal",
  aliases: ["mltogal"],
  title: "Milliliters To Gallons",
  description: "Convert milliliters to gallons.",
  usage: ["mltogal <value>"],
  examples: ["mltogal 10"],
  group: "conversion",
  fromLabel: "Milliliters",
  toLabel: "Gallons",
  factor: 0.00026417205235814843
});
