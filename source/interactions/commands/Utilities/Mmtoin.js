const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mmtoin",
  aliases: ["mmtoin"],
  title: "Millimeters To Inches",
  description: "Convert millimeters to inches.",
  usage: ["mmtoin <value>"],
  examples: ["mmtoin 10"],
  group: "conversion",
  fromLabel: "Millimeters",
  toLabel: "Inches",
  factor: 0.03937007874015748
});
