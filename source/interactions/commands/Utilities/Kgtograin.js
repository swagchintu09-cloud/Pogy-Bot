const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kgtograin",
  aliases: ["kgtograin"],
  title: "Kilograms To Grains",
  description: "Convert kilograms to grains.",
  usage: ["kgtograin <value>"],
  examples: ["kgtograin 10"],
  group: "conversion",
  fromLabel: "Kilograms",
  toLabel: "Grains",
  factor: 15432.358352941432
});
