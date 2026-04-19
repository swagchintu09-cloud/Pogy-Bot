const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "intomm",
  aliases: ["intomm"],
  title: "Inches To Millimeters",
  description: "Convert inches to millimeters.",
  usage: ["intomm <value>"],
  examples: ["intomm 10"],
  group: "conversion",
  fromLabel: "Inches",
  toLabel: "Millimeters",
  factor: 25.4
});
