const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "galtofloz",
  aliases: ["galtofloz"],
  title: "Gallons To Fluid Ounces",
  description: "Convert gallons to fluid ounces.",
  usage: ["galtofloz <value>"],
  examples: ["galtofloz 10"],
  group: "conversion",
  fromLabel: "Gallons",
  toLabel: "Fluid Ounces",
  factor: 128
});
