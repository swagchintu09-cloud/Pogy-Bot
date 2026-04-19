const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ftoc",
  aliases: ["ftoc"],
  title: "Fahrenheit To Celsius",
  description: "Convert fahrenheit to celsius.",
  usage: ["ftoc <value>"],
  examples: ["ftoc 25"],
  group: "conversion",
  fromLabel: "Fahrenheit",
  toLabel: "Celsius",
  formula: "f_to_c"
});
