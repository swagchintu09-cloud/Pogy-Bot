const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmitoin",
  aliases: ["nmitoin"],
  title: "Nautical Miles To Inches",
  description: "Convert nautical miles to inches.",
  usage: ["nmitoin <value>"],
  examples: ["nmitoin 10"],
  group: "conversion",
  fromLabel: "Nautical Miles",
  toLabel: "Inches",
  factor: 72913.38582677166
});
