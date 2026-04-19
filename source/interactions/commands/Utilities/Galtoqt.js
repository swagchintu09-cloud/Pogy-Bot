const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "galtoqt",
  aliases: ["galtoqt"],
  title: "Gallons To Quarts",
  description: "Convert gallons to quarts.",
  usage: ["galtoqt <value>"],
  examples: ["galtoqt 10"],
  group: "conversion",
  fromLabel: "Gallons",
  toLabel: "Quarts",
  factor: 4
});
