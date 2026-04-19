const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tsptocup",
  aliases: ["tsptocup"],
  title: "Teaspoons To Cups",
  description: "Convert teaspoons to cups.",
  usage: ["tsptocup <value>"],
  examples: ["tsptocup 10"],
  group: "conversion",
  fromLabel: "Teaspoons",
  toLabel: "Cups",
  factor: 0.020833333333333332
});
