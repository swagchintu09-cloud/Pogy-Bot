const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mltoqt",
  aliases: ["mltoqt"],
  title: "Milliliters To Quarts",
  description: "Convert milliliters to quarts.",
  usage: ["mltoqt <value>"],
  examples: ["mltoqt 10"],
  group: "conversion",
  fromLabel: "Milliliters",
  toLabel: "Quarts",
  factor: 0.0010566882094325937
});
