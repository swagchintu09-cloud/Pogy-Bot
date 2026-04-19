const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "galtotbsp",
  aliases: ["galtotbsp"],
  title: "Gallons To Tablespoons",
  description: "Convert gallons to tablespoons.",
  usage: ["galtotbsp <value>"],
  examples: ["galtotbsp 10"],
  group: "conversion",
  fromLabel: "Gallons",
  toLabel: "Tablespoons",
  factor: 256
});
