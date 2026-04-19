const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "fttoin",
  aliases: ["fttoin"],
  title: "Feet To Inches",
  description: "Convert feet to inches.",
  usage: ["fttoin <value>"],
  examples: ["fttoin 10"],
  group: "conversion",
  fromLabel: "Feet",
  toLabel: "Inches",
  factor: 12.000000000000002
});
