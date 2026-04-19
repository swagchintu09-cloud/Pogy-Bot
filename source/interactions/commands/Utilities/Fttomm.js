const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "fttomm",
  aliases: ["fttomm"],
  title: "Feet To Millimeters",
  description: "Convert feet to millimeters.",
  usage: ["fttomm <value>"],
  examples: ["fttomm 10"],
  group: "conversion",
  fromLabel: "Feet",
  toLabel: "Millimeters",
  factor: 304.8
});
