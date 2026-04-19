const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "cuptotsp",
  aliases: ["cuptotsp"],
  title: "Cups To Teaspoons",
  description: "Convert cups to teaspoons.",
  usage: ["cuptotsp <value>"],
  examples: ["cuptotsp 10"],
  group: "conversion",
  fromLabel: "Cups",
  toLabel: "Teaspoons",
  factor: 48
});
