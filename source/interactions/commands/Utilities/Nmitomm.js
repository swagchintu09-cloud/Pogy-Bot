const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmitomm",
  aliases: ["nmitomm"],
  title: "Nautical Miles To Millimeters",
  description: "Convert nautical miles to millimeters.",
  usage: ["nmitomm <value>"],
  examples: ["nmitomm 10"],
  group: "conversion",
  fromLabel: "Nautical Miles",
  toLabel: "Millimeters",
  factor: 1852000
});
