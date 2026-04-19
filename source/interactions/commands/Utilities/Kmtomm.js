const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kmtomm",
  aliases: ["kmtomm"],
  title: "Kilometers To Millimeters",
  description: "Convert kilometers to millimeters.",
  usage: ["kmtomm <value>"],
  examples: ["kmtomm 10"],
  group: "conversion",
  fromLabel: "Kilometers",
  toLabel: "Millimeters",
  factor: 1000000
});
