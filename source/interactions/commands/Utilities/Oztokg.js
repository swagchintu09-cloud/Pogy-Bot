const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "oztokg",
  aliases: ["oztokg"],
  title: "Ounces To Kilograms",
  description: "Convert ounces to kilograms.",
  usage: ["oztokg <value>"],
  examples: ["oztokg 10"],
  group: "conversion",
  fromLabel: "Ounces",
  toLabel: "Kilograms",
  factor: 0.028349523125
});
