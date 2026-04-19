const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mmtonm",
  aliases: ["mmtonm"],
  title: "Millimeters To Nanometers",
  description: "Convert millimeters to nanometers.",
  usage: ["mmtonm <value>"],
  examples: ["mmtonm 10"],
  group: "conversion",
  fromLabel: "Millimeters",
  toLabel: "Nanometers",
  factor: 1000000
});
