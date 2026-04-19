const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmitoyd",
  aliases: ["nmitoyd"],
  title: "Nautical Miles To Yards",
  description: "Convert nautical miles to yards.",
  usage: ["nmitoyd <value>"],
  examples: ["nmitoyd 10"],
  group: "conversion",
  fromLabel: "Nautical Miles",
  toLabel: "Yards",
  factor: 2025.3718285214347
});
