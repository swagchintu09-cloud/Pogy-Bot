const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ktof",
  aliases: ["ktof"],
  title: "Kelvin To Fahrenheit",
  description: "Convert kelvin to fahrenheit.",
  usage: ["ktof <value>"],
  examples: ["ktof 25"],
  group: "conversion",
  fromLabel: "Kelvin",
  toLabel: "Fahrenheit",
  formula: "k_to_f"
});
