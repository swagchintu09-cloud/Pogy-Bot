const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "oztolb",
  aliases: ["oztolb"],
  title: "Ounces To Pounds",
  description: "Convert ounces to pounds.",
  usage: ["oztolb <value>"],
  examples: ["oztolb 10"],
  group: "conversion",
  fromLabel: "Ounces",
  toLabel: "Pounds",
  factor: 0.0625
});
