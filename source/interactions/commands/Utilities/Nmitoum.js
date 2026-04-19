const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmitoum",
  aliases: ["nmitoum"],
  title: "Nautical Miles To Micrometers",
  description: "Convert nautical miles to micrometers.",
  usage: ["nmitoum <value>"],
  examples: ["nmitoum 10"],
  group: "conversion",
  fromLabel: "Nautical Miles",
  toLabel: "Micrometers",
  factor: 1852000000
});
