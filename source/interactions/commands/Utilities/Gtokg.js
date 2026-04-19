const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gtokg",
  aliases: ["gtokg"],
  title: "Grams To Kilograms",
  description: "Convert grams to kilograms.",
  usage: ["gtokg <value>"],
  examples: ["gtokg 10"],
  group: "conversion",
  fromLabel: "Grams",
  toLabel: "Kilograms",
  factor: 0.001
});
