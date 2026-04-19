const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tsptofloz",
  aliases: ["tsptofloz"],
  title: "Teaspoons To Fluid Ounces",
  description: "Convert teaspoons to fluid ounces.",
  usage: ["tsptofloz <value>"],
  examples: ["tsptofloz 10"],
  group: "conversion",
  fromLabel: "Teaspoons",
  toLabel: "Fluid Ounces",
  factor: 0.16666666666666666
});
