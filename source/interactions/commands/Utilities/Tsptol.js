const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tsptol",
  aliases: ["tsptol"],
  title: "Teaspoons To Liters",
  description: "Convert teaspoons to liters.",
  usage: ["tsptol <value>"],
  examples: ["tsptol 10"],
  group: "conversion",
  fromLabel: "Teaspoons",
  toLabel: "Liters",
  factor: 0.00492892159375
});
