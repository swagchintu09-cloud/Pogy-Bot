const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mgtograin",
  aliases: ["mgtograin"],
  title: "Milligrams To Grains",
  description: "Convert milligrams to grains.",
  usage: ["mgtograin <value>"],
  examples: ["mgtograin 10"],
  group: "conversion",
  fromLabel: "Milligrams",
  toLabel: "Grains",
  factor: 0.015432358352941431
});
