const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "us_tontograin",
  aliases: ["us_tontograin"],
  title: "US Tons To Grains",
  description: "Convert us tons to grains.",
  usage: ["us_tontograin <value>"],
  examples: ["us_tontograin 10"],
  group: "conversion",
  fromLabel: "US Tons",
  toLabel: "Grains",
  factor: 14000000.000000002
});
