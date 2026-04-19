const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gtocarat",
  aliases: ["gtocarat"],
  title: "Grams To Carats",
  description: "Convert grams to carats.",
  usage: ["gtocarat <value>"],
  examples: ["gtocarat 10"],
  group: "conversion",
  fromLabel: "Grams",
  toLabel: "Carats",
  factor: 5
});
