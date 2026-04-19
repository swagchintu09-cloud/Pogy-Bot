const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "us_tontolb",
  aliases: ["us_tontolb"],
  title: "US Tons To Pounds",
  description: "Convert us tons to pounds.",
  usage: ["us_tontolb <value>"],
  examples: ["us_tontolb 10"],
  group: "conversion",
  fromLabel: "US Tons",
  toLabel: "Pounds",
  factor: 2000
});
