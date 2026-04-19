const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "umtoin",
  aliases: ["umtoin"],
  title: "Micrometers To Inches",
  description: "Convert micrometers to inches.",
  usage: ["umtoin <value>"],
  examples: ["umtoin 10"],
  group: "conversion",
  fromLabel: "Micrometers",
  toLabel: "Inches",
  factor: 0.00003937007874015748
});
