const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "qttofloz",
  aliases: ["qttofloz"],
  title: "Quarts To Fluid Ounces",
  description: "Convert quarts to fluid ounces.",
  usage: ["qttofloz <value>"],
  examples: ["qttofloz 10"],
  group: "conversion",
  fromLabel: "Quarts",
  toLabel: "Fluid Ounces",
  factor: 32
});
