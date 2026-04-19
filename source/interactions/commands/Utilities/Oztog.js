const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "oztog",
  aliases: ["oztog"],
  title: "Ounces To Grams",
  description: "Convert ounces to grams.",
  usage: ["oztog <value>"],
  examples: ["oztog 10"],
  group: "conversion",
  fromLabel: "Ounces",
  toLabel: "Grams",
  factor: 28.349523125
});
