const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "oztous_ton",
  aliases: ["oztous_ton"],
  title: "Ounces To US Tons",
  description: "Convert ounces to us tons.",
  usage: ["oztous_ton <value>"],
  examples: ["oztous_ton 10"],
  group: "conversion",
  fromLabel: "Ounces",
  toLabel: "US Tons",
  factor: 0.00003125
});
