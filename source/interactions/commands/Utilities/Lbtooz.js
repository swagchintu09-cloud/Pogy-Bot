const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "lbtooz",
  aliases: ["lbtooz"],
  title: "Pounds To Ounces",
  description: "Convert pounds to ounces.",
  usage: ["lbtooz <value>"],
  examples: ["lbtooz 10"],
  group: "conversion",
  fromLabel: "Pounds",
  toLabel: "Ounces",
  factor: 16
});
