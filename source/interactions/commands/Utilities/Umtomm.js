const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "umtomm",
  aliases: ["umtomm"],
  title: "Micrometers To Millimeters",
  description: "Convert micrometers to millimeters.",
  usage: ["umtomm <value>"],
  examples: ["umtomm 10"],
  group: "conversion",
  fromLabel: "Micrometers",
  toLabel: "Millimeters",
  factor: 0.001
});
