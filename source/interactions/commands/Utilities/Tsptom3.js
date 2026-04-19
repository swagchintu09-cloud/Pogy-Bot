const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tsptom3",
  aliases: ["tsptom3"],
  title: "Teaspoons To Cubic Meters",
  description: "Convert teaspoons to cubic meters.",
  usage: ["tsptom3 <value>"],
  examples: ["tsptom3 10"],
  group: "conversion",
  fromLabel: "Teaspoons",
  toLabel: "Cubic Meters",
  factor: 0.00000492892159375
});
