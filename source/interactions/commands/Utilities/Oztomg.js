const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "oztomg",
  aliases: ["oztomg"],
  title: "Ounces To Milligrams",
  description: "Convert ounces to milligrams.",
  usage: ["oztomg <value>"],
  examples: ["oztomg 10"],
  group: "conversion",
  fromLabel: "Ounces",
  toLabel: "Milligrams",
  factor: 28349.523125000003
});
