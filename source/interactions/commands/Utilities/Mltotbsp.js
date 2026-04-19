const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mltotbsp",
  aliases: ["mltotbsp"],
  title: "Milliliters To Tablespoons",
  description: "Convert milliliters to tablespoons.",
  usage: ["mltotbsp <value>"],
  examples: ["mltotbsp 10"],
  group: "conversion",
  fromLabel: "Milliliters",
  toLabel: "Tablespoons",
  factor: 0.067628045403686
});
