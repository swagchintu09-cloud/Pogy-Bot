const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "cuptotbsp",
  aliases: ["cuptotbsp"],
  title: "Cups To Tablespoons",
  description: "Convert cups to tablespoons.",
  usage: ["cuptotbsp <value>"],
  examples: ["cuptotbsp 10"],
  group: "conversion",
  fromLabel: "Cups",
  toLabel: "Tablespoons",
  factor: 16
});
