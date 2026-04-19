const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "us_tontog",
  aliases: ["us_tontog"],
  title: "US Tons To Grams",
  description: "Convert us tons to grams.",
  usage: ["us_tontog <value>"],
  examples: ["us_tontog 10"],
  group: "conversion",
  fromLabel: "US Tons",
  toLabel: "Grams",
  factor: 907184.74
});
