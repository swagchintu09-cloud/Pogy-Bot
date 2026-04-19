const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "floztol",
  aliases: ["floztol"],
  title: "Fluid Ounces To Liters",
  description: "Convert fluid ounces to liters.",
  usage: ["floztol <value>"],
  examples: ["floztol 10"],
  group: "conversion",
  fromLabel: "Fluid Ounces",
  toLabel: "Liters",
  factor: 0.0295735295625
});
