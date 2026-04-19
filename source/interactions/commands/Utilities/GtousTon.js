const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gtous_ton",
  aliases: ["gtous_ton"],
  title: "Grams To US Tons",
  description: "Convert grams to us tons.",
  usage: ["gtous_ton <value>"],
  examples: ["gtous_ton 10"],
  group: "conversion",
  fromLabel: "Grams",
  toLabel: "US Tons",
  factor: 0.000001102311310924388
});
