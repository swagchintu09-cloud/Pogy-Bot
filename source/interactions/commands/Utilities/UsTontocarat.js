const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "us_tontocarat",
  aliases: ["us_tontocarat"],
  title: "US Tons To Carats",
  description: "Convert us tons to carats.",
  usage: ["us_tontocarat <value>"],
  examples: ["us_tontocarat 10"],
  group: "conversion",
  fromLabel: "US Tons",
  toLabel: "Carats",
  factor: 4535923.7
});
