const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "carattot",
  aliases: ["carattot"],
  title: "Carats To Metric Tons",
  description: "Convert carats to metric tons.",
  usage: ["carattot <value>"],
  examples: ["carattot 10"],
  group: "conversion",
  fromLabel: "Carats",
  toLabel: "Metric Tons",
  factor: 2.0000000000000002e-7
});
