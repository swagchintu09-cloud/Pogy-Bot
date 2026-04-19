const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "us_tontot",
  aliases: ["us_tontot"],
  title: "US Tons To Metric Tons",
  description: "Convert us tons to metric tons.",
  usage: ["us_tontot <value>"],
  examples: ["us_tontot 10"],
  group: "conversion",
  fromLabel: "US Tons",
  toLabel: "Metric Tons",
  factor: 0.90718474
});
