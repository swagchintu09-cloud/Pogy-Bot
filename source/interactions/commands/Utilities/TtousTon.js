const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ttous_ton",
  aliases: ["ttous_ton"],
  title: "Metric Tons To US Tons",
  description: "Convert metric tons to us tons.",
  usage: ["ttous_ton <value>"],
  examples: ["ttous_ton 10"],
  group: "conversion",
  fromLabel: "Metric Tons",
  toLabel: "US Tons",
  factor: 1.1023113109243878
});
