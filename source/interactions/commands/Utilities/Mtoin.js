const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mtoin",
  aliases: ["mtoin"],
  title: "Meters To Inches",
  description: "Convert meters to inches.",
  usage: ["mtoin <value>"],
  examples: ["mtoin 10"],
  group: "conversion",
  fromLabel: "Meters",
  toLabel: "Inches",
  factor: 39.37007874015748
});
