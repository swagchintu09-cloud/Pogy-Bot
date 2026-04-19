const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mtomm",
  aliases: ["mtomm"],
  title: "Meters To Millimeters",
  description: "Convert meters to millimeters.",
  usage: ["mtomm <value>"],
  examples: ["mtomm 10"],
  group: "conversion",
  fromLabel: "Meters",
  toLabel: "Millimeters",
  factor: 1000
});
