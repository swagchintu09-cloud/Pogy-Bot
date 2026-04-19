const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmitocm",
  aliases: ["nmitocm"],
  title: "Nautical Miles To Centimeters",
  description: "Convert nautical miles to centimeters.",
  usage: ["nmitocm <value>"],
  examples: ["nmitocm 10"],
  group: "conversion",
  fromLabel: "Nautical Miles",
  toLabel: "Centimeters",
  factor: 185200
});
