const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "us_tontokg",
  aliases: ["us_tontokg"],
  title: "US Tons To Kilograms",
  description: "Convert us tons to kilograms.",
  usage: ["us_tontokg <value>"],
  examples: ["us_tontokg 10"],
  group: "conversion",
  fromLabel: "US Tons",
  toLabel: "Kilograms",
  factor: 907.18474
});
