const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gtograin",
  aliases: ["gtograin"],
  title: "Grams To Grains",
  description: "Convert grams to grains.",
  usage: ["gtograin <value>"],
  examples: ["gtograin 10"],
  group: "conversion",
  fromLabel: "Grams",
  toLabel: "Grains",
  factor: 15.432358352941431
});
