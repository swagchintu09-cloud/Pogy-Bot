const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "us_tontomg",
  aliases: ["us_tontomg"],
  title: "US Tons To Milligrams",
  description: "Convert us tons to milligrams.",
  usage: ["us_tontomg <value>"],
  examples: ["us_tontomg 10"],
  group: "conversion",
  fromLabel: "US Tons",
  toLabel: "Milligrams",
  factor: 907184740.0000001
});
