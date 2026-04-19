const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mitomm",
  aliases: ["mitomm"],
  title: "Miles To Millimeters",
  description: "Convert miles to millimeters.",
  usage: ["mitomm <value>"],
  examples: ["mitomm 10"],
  group: "conversion",
  fromLabel: "Miles",
  toLabel: "Millimeters",
  factor: 1609344
});
