const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "carattost",
  aliases: ["carattost"],
  title: "Carats To Stone",
  description: "Convert carats to stone.",
  usage: ["carattost <value>"],
  examples: ["carattost 10"],
  group: "conversion",
  fromLabel: "Carats",
  toLabel: "Stone",
  factor: 0.00003149460888355394
});
