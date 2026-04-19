const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gtomg",
  aliases: ["gtomg"],
  title: "Grams To Milligrams",
  description: "Convert grams to milligrams.",
  usage: ["gtomg <value>"],
  examples: ["gtomg 10"],
  group: "conversion",
  fromLabel: "Grams",
  toLabel: "Milligrams",
  factor: 1000.0000000000001
});
