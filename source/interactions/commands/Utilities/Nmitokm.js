const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmitokm",
  aliases: ["nmitokm"],
  title: "Nautical Miles To Kilometers",
  description: "Convert nautical miles to kilometers.",
  usage: ["nmitokm <value>"],
  examples: ["nmitokm 10"],
  group: "conversion",
  fromLabel: "Nautical Miles",
  toLabel: "Kilometers",
  factor: 1.852
});
