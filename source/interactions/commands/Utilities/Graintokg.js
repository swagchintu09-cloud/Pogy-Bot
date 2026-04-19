const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "graintokg",
  aliases: ["graintokg"],
  title: "Grains To Kilograms",
  description: "Convert grains to kilograms.",
  usage: ["graintokg <value>"],
  examples: ["graintokg 10"],
  group: "conversion",
  fromLabel: "Grains",
  toLabel: "Kilograms",
  factor: 0.00006479891
});
