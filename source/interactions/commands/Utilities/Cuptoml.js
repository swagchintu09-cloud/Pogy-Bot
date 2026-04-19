const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "cuptoml",
  aliases: ["cuptoml"],
  title: "Cups To Milliliters",
  description: "Convert cups to milliliters.",
  usage: ["cuptoml <value>"],
  examples: ["cuptoml 10"],
  group: "conversion",
  fromLabel: "Cups",
  toLabel: "Milliliters",
  factor: 236.5882365
});
