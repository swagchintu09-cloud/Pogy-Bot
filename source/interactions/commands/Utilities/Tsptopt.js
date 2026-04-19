const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tsptopt",
  aliases: ["tsptopt"],
  title: "Teaspoons To Pints",
  description: "Convert teaspoons to pints.",
  usage: ["tsptopt <value>"],
  examples: ["tsptopt 10"],
  group: "conversion",
  fromLabel: "Teaspoons",
  toLabel: "Pints",
  factor: 0.010416666666666666
});
