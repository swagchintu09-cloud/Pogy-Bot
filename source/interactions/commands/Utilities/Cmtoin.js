const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "cmtoin",
  aliases: ["cmtoin"],
  title: "Centimeters To Inches",
  description: "Convert centimeters to inches.",
  usage: ["cmtoin <value>"],
  examples: ["cmtoin 10"],
  group: "conversion",
  fromLabel: "Centimeters",
  toLabel: "Inches",
  factor: 0.3937007874015748
});
