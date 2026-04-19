const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "galtotsp",
  aliases: ["galtotsp"],
  title: "Gallons To Teaspoons",
  description: "Convert gallons to teaspoons.",
  usage: ["galtotsp <value>"],
  examples: ["galtotsp 10"],
  group: "conversion",
  fromLabel: "Gallons",
  toLabel: "Teaspoons",
  factor: 768
});
