const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "oztograin",
  aliases: ["oztograin"],
  title: "Ounces To Grains",
  description: "Convert ounces to grains.",
  usage: ["oztograin <value>"],
  examples: ["oztograin 10"],
  group: "conversion",
  fromLabel: "Ounces",
  toLabel: "Grains",
  factor: 437.50000000000006
});
