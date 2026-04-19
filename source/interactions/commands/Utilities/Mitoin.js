const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mitoin",
  aliases: ["mitoin"],
  title: "Miles To Inches",
  description: "Convert miles to inches.",
  usage: ["mitoin <value>"],
  examples: ["mitoin 10"],
  group: "conversion",
  fromLabel: "Miles",
  toLabel: "Inches",
  factor: 63360.00000000001
});
