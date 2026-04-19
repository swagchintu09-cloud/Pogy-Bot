const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "galtoml",
  aliases: ["galtoml"],
  title: "Gallons To Milliliters",
  description: "Convert gallons to milliliters.",
  usage: ["galtoml <value>"],
  examples: ["galtoml 10"],
  group: "conversion",
  fromLabel: "Gallons",
  toLabel: "Milliliters",
  factor: 3785.411784
});
