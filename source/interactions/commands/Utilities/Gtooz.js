const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gtooz",
  aliases: ["gtooz"],
  title: "Grams To Ounces",
  description: "Convert grams to ounces.",
  usage: ["gtooz <value>"],
  examples: ["gtooz 10"],
  group: "conversion",
  fromLabel: "Grams",
  toLabel: "Ounces",
  factor: 0.035273961949580414
});
