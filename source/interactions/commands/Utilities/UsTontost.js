const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "us_tontost",
  aliases: ["us_tontost"],
  title: "US Tons To Stone",
  description: "Convert us tons to stone.",
  usage: ["us_tontost <value>"],
  examples: ["us_tontost 10"],
  group: "conversion",
  fromLabel: "US Tons",
  toLabel: "Stone",
  factor: 142.85714285714286
});
