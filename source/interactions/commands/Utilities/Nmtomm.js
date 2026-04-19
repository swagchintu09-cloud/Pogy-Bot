const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmtomm",
  aliases: ["nmtomm"],
  title: "Nanometers To Millimeters",
  description: "Convert nanometers to millimeters.",
  usage: ["nmtomm <value>"],
  examples: ["nmtomm 10"],
  group: "conversion",
  fromLabel: "Nanometers",
  toLabel: "Millimeters",
  factor: 0.000001
});
