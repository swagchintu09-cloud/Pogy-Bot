const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mgtog",
  aliases: ["mgtog"],
  title: "Milligrams To Grams",
  description: "Convert milligrams to grams.",
  usage: ["mgtog <value>"],
  examples: ["mgtog 10"],
  group: "conversion",
  fromLabel: "Milligrams",
  toLabel: "Grams",
  factor: 0.001
});
