const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "galtol",
  aliases: ["galtol"],
  title: "Gallons To Liters",
  description: "Convert gallons to liters.",
  usage: ["galtol <value>"],
  examples: ["galtol 10"],
  group: "conversion",
  fromLabel: "Gallons",
  toLabel: "Liters",
  factor: 3.785411784
});
