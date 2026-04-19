const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "oztost",
  aliases: ["oztost"],
  title: "Ounces To Stone",
  description: "Convert ounces to stone.",
  usage: ["oztost <value>"],
  examples: ["oztost 10"],
  group: "conversion",
  fromLabel: "Ounces",
  toLabel: "Stone",
  factor: 0.004464285714285714
});
