const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "carattograin",
  aliases: ["carattograin"],
  title: "Carats To Grains",
  description: "Convert carats to grains.",
  usage: ["carattograin <value>"],
  examples: ["carattograin 10"],
  group: "conversion",
  fromLabel: "Carats",
  toLabel: "Grains",
  factor: 3.0864716705882866
});
