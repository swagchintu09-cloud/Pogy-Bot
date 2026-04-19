const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "carattolb",
  aliases: ["carattolb"],
  title: "Carats To Pounds",
  description: "Convert carats to pounds.",
  usage: ["carattolb <value>"],
  examples: ["carattolb 10"],
  group: "conversion",
  fromLabel: "Carats",
  toLabel: "Pounds",
  factor: 0.00044092452436975517
});
