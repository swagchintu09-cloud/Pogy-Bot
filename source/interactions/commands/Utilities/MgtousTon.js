const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mgtous_ton",
  aliases: ["mgtous_ton"],
  title: "Milligrams To US Tons",
  description: "Convert milligrams to us tons.",
  usage: ["mgtous_ton <value>"],
  examples: ["mgtous_ton 10"],
  group: "conversion",
  fromLabel: "Milligrams",
  toLabel: "US Tons",
  factor: 1.102311310924388e-9
});
