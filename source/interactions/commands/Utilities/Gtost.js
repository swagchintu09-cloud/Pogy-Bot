const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gtost",
  aliases: ["gtost"],
  title: "Grams To Stone",
  description: "Convert grams to stone.",
  usage: ["gtost <value>"],
  examples: ["gtost 10"],
  group: "conversion",
  fromLabel: "Grams",
  toLabel: "Stone",
  factor: 0.0001574730444177697
});
