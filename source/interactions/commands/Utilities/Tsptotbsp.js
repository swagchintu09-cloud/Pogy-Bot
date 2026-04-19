const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tsptotbsp",
  aliases: ["tsptotbsp"],
  title: "Teaspoons To Tablespoons",
  description: "Convert teaspoons to tablespoons.",
  usage: ["tsptotbsp <value>"],
  examples: ["tsptotbsp 10"],
  group: "conversion",
  fromLabel: "Teaspoons",
  toLabel: "Tablespoons",
  factor: 0.3333333333333333
});
