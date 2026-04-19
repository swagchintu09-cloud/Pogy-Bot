const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmitom",
  aliases: ["nmitom"],
  title: "Nautical Miles To Meters",
  description: "Convert nautical miles to meters.",
  usage: ["nmitom <value>"],
  examples: ["nmitom 10"],
  group: "conversion",
  fromLabel: "Nautical Miles",
  toLabel: "Meters",
  factor: 1852
});
