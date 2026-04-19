const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ctok",
  aliases: ["ctok"],
  title: "Celsius To Kelvin",
  description: "Convert celsius to kelvin.",
  usage: ["ctok <value>"],
  examples: ["ctok 25"],
  group: "conversion",
  fromLabel: "Celsius",
  toLabel: "Kelvin",
  formula: "c_to_k"
});
