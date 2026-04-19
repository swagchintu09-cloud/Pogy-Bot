const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sttokg",
  aliases: ["sttokg"],
  title: "Stone To Kilograms",
  description: "Convert stone to kilograms.",
  usage: ["sttokg <value>"],
  examples: ["sttokg 10"],
  group: "conversion",
  fromLabel: "Stone",
  toLabel: "Kilograms",
  factor: 6.35029318
});
