const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "lbtokg",
  aliases: ["lbtokg"],
  title: "Pounds To Kilograms",
  description: "Convert pounds to kilograms.",
  usage: ["lbtokg <value>"],
  examples: ["lbtokg 10"],
  group: "conversion",
  fromLabel: "Pounds",
  toLabel: "Kilograms",
  factor: 0.45359237
});
