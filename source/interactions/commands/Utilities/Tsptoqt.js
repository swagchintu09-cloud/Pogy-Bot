const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tsptoqt",
  aliases: ["tsptoqt"],
  title: "Teaspoons To Quarts",
  description: "Convert teaspoons to quarts.",
  usage: ["tsptoqt <value>"],
  examples: ["tsptoqt 10"],
  group: "conversion",
  fromLabel: "Teaspoons",
  toLabel: "Quarts",
  factor: 0.005208333333333333
});
