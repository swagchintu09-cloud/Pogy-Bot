const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gtolb",
  aliases: ["gtolb"],
  title: "Grams To Pounds",
  description: "Convert grams to pounds.",
  usage: ["gtolb <value>"],
  examples: ["gtolb 10"],
  group: "conversion",
  fromLabel: "Grams",
  toLabel: "Pounds",
  factor: 0.002204622621848776
});
