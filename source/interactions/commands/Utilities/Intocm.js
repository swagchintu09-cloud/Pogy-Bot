const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "intocm",
  aliases: ["intocm"],
  title: "Inches To Centimeters",
  description: "Convert inches to centimeters.",
  usage: ["intocm <value>"],
  examples: ["intocm 10"],
  group: "conversion",
  fromLabel: "Inches",
  toLabel: "Centimeters",
  factor: 2.54
});
