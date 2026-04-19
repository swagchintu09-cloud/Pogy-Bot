const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tsptoml",
  aliases: ["tsptoml"],
  title: "Teaspoons To Milliliters",
  description: "Convert teaspoons to milliliters.",
  usage: ["tsptoml <value>"],
  examples: ["tsptoml 10"],
  group: "conversion",
  fromLabel: "Teaspoons",
  toLabel: "Milliliters",
  factor: 4.92892159375
});
