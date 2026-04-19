const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kmtoin",
  aliases: ["kmtoin"],
  title: "Kilometers To Inches",
  description: "Convert kilometers to inches.",
  usage: ["kmtoin <value>"],
  examples: ["kmtoin 10"],
  group: "conversion",
  fromLabel: "Kilometers",
  toLabel: "Inches",
  factor: 39370.078740157485
});
