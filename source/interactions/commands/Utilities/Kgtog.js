const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kgtog",
  aliases: ["kgtog"],
  title: "Kilograms To Grams",
  description: "Convert kilograms to grams.",
  usage: ["kgtog <value>"],
  examples: ["kgtog 10"],
  group: "conversion",
  fromLabel: "Kilograms",
  toLabel: "Grams",
  factor: 1000
});
