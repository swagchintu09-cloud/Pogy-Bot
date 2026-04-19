const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sttooz",
  aliases: ["sttooz"],
  title: "Stone To Ounces",
  description: "Convert stone to ounces.",
  usage: ["sttooz <value>"],
  examples: ["sttooz 10"],
  group: "conversion",
  fromLabel: "Stone",
  toLabel: "Ounces",
  factor: 224
});
