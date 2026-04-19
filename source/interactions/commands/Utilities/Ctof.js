const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ctof",
  aliases: ["ctof"],
  title: "Celsius To Fahrenheit",
  description: "Convert celsius to fahrenheit.",
  usage: ["ctof <value>"],
  examples: ["ctof 25"],
  group: "conversion",
  fromLabel: "Celsius",
  toLabel: "Fahrenheit",
  formula: "c_to_f"
});
