const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "cuptol",
  aliases: ["cuptol"],
  title: "Cups To Liters",
  description: "Convert cups to liters.",
  usage: ["cuptol <value>"],
  examples: ["cuptol 10"],
  group: "conversion",
  fromLabel: "Cups",
  toLabel: "Liters",
  factor: 0.2365882365
});
