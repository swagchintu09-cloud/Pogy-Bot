const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mltotsp",
  aliases: ["mltotsp"],
  title: "Milliliters To Teaspoons",
  description: "Convert milliliters to teaspoons.",
  usage: ["mltotsp <value>"],
  examples: ["mltotsp 10"],
  group: "conversion",
  fromLabel: "Milliliters",
  toLabel: "Teaspoons",
  factor: 0.202884136211058
});
