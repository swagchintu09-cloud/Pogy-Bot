const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ktoc",
  aliases: ["ktoc"],
  title: "Kelvin To Celsius",
  description: "Convert kelvin to celsius.",
  usage: ["ktoc <value>"],
  examples: ["ktoc 25"],
  group: "conversion",
  fromLabel: "Kelvin",
  toLabel: "Celsius",
  formula: "k_to_c"
});
