const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "oztot",
  aliases: ["oztot"],
  title: "Ounces To Metric Tons",
  description: "Convert ounces to metric tons.",
  usage: ["oztot <value>"],
  examples: ["oztot 10"],
  group: "conversion",
  fromLabel: "Ounces",
  toLabel: "Metric Tons",
  factor: 0.000028349523125000003
});
