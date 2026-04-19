const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "ratio",
  name: "conversionpercent",
  aliases: ["conversionpercent"],
  title: "Conversion Percent",
  description: "Conversion Percent utility.",
  usage: ["conversionpercent <left> <right>"],
  examples: ["conversionpercent 40 50"],
  group: "math",
  suffix: "%",
  compute: (left, right) => (left / right) * 100
});
