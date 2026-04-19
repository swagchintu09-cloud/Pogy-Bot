const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "carattomg",
  aliases: ["carattomg"],
  title: "Carats To Milligrams",
  description: "Convert carats to milligrams.",
  usage: ["carattomg <value>"],
  examples: ["carattomg 10"],
  group: "conversion",
  fromLabel: "Carats",
  toLabel: "Milligrams",
  factor: 200.00000000000003
});
