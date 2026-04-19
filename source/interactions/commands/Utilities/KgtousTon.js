const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kgtous_ton",
  aliases: ["kgtous_ton"],
  title: "Kilograms To US Tons",
  description: "Convert kilograms to us tons.",
  usage: ["kgtous_ton <value>"],
  examples: ["kgtous_ton 10"],
  group: "conversion",
  fromLabel: "Kilograms",
  toLabel: "US Tons",
  factor: 0.001102311310924388
});
