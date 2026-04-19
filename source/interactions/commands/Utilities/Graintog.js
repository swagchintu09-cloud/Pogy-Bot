const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "graintog",
  aliases: ["graintog"],
  title: "Grains To Grams",
  description: "Convert grains to grams.",
  usage: ["graintog <value>"],
  examples: ["graintog 10"],
  group: "conversion",
  fromLabel: "Grains",
  toLabel: "Grams",
  factor: 0.06479890999999999
});
