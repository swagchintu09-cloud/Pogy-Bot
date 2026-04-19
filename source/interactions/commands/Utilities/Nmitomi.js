const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmitomi",
  aliases: ["nmitomi"],
  title: "Nautical Miles To Miles",
  description: "Convert nautical miles to miles.",
  usage: ["nmitomi <value>"],
  examples: ["nmitomi 10"],
  group: "conversion",
  fromLabel: "Nautical Miles",
  toLabel: "Miles",
  factor: 1.1507794480235425
});
