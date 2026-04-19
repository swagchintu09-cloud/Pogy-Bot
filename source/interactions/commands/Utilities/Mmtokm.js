const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mmtokm",
  aliases: ["mmtokm"],
  title: "Millimeters To Kilometers",
  description: "Convert millimeters to kilometers.",
  usage: ["mmtokm <value>"],
  examples: ["mmtokm 10"],
  group: "conversion",
  fromLabel: "Millimeters",
  toLabel: "Kilometers",
  factor: 0.000001
});
