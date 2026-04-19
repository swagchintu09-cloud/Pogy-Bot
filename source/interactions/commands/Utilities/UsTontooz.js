const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "us_tontooz",
  aliases: ["us_tontooz"],
  title: "US Tons To Ounces",
  description: "Convert us tons to ounces.",
  usage: ["us_tontooz <value>"],
  examples: ["us_tontooz 10"],
  group: "conversion",
  fromLabel: "US Tons",
  toLabel: "Ounces",
  factor: 32000
});
