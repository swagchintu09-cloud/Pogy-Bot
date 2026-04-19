const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmitonm",
  aliases: ["nmitonm"],
  title: "Nautical Miles To Nanometers",
  description: "Convert nautical miles to nanometers.",
  usage: ["nmitonm <value>"],
  examples: ["nmitonm 10"],
  group: "conversion",
  fromLabel: "Nautical Miles",
  toLabel: "Nanometers",
  factor: 1852000000000
});
