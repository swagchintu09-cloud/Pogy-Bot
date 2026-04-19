const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "carattous_ton",
  aliases: ["carattous_ton"],
  title: "Carats To US Tons",
  description: "Convert carats to us tons.",
  usage: ["carattous_ton <value>"],
  examples: ["carattous_ton 10"],
  group: "conversion",
  fromLabel: "Carats",
  toLabel: "US Tons",
  factor: 2.2046226218487757e-7
});
