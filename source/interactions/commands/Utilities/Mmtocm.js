const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mmtocm",
  aliases: ["mmtocm"],
  title: "Millimeters To Centimeters",
  description: "Convert millimeters to centimeters.",
  usage: ["mmtocm <value>"],
  examples: ["mmtocm 10"],
  group: "conversion",
  fromLabel: "Millimeters",
  toLabel: "Centimeters",
  factor: 0.1
});
