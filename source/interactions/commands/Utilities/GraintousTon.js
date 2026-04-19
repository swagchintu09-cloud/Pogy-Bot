const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "graintous_ton",
  aliases: ["graintous_ton"],
  title: "Grains To US Tons",
  description: "Convert grains to us tons.",
  usage: ["graintous_ton <value>"],
  examples: ["graintous_ton 10"],
  group: "conversion",
  fromLabel: "Grains",
  toLabel: "US Tons",
  factor: 7.142857142857142e-8
});
