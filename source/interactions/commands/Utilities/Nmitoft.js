const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmitoft",
  aliases: ["nmitoft"],
  title: "Nautical Miles To Feet",
  description: "Convert nautical miles to feet.",
  usage: ["nmitoft <value>"],
  examples: ["nmitoft 10"],
  group: "conversion",
  fromLabel: "Nautical Miles",
  toLabel: "Feet",
  factor: 6076.115485564304
});
