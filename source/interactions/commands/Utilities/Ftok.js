const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ftok",
  aliases: ["ftok"],
  title: "Fahrenheit To Kelvin",
  description: "Convert fahrenheit to kelvin.",
  usage: ["ftok <value>"],
  examples: ["ftok 25"],
  group: "conversion",
  fromLabel: "Fahrenheit",
  toLabel: "Kelvin",
  formula: "f_to_k"
});
