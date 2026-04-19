const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mmtomi",
  aliases: ["mmtomi"],
  title: "Millimeters To Miles",
  description: "Convert millimeters to miles.",
  usage: ["mmtomi <value>"],
  examples: ["mmtomi 10"],
  group: "conversion",
  fromLabel: "Millimeters",
  toLabel: "Miles",
  factor: 6.21371192237334e-7
});
