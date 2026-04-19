const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "cuptofloz",
  aliases: ["cuptofloz"],
  title: "Cups To Fluid Ounces",
  description: "Convert cups to fluid ounces.",
  usage: ["cuptofloz <value>"],
  examples: ["cuptofloz 10"],
  group: "conversion",
  fromLabel: "Cups",
  toLabel: "Fluid Ounces",
  factor: 8
});
