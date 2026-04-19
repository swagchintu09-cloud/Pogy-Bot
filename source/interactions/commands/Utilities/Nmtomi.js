const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "nmtomi",
  aliases: ["nmtomi"],
  title: "Nanometers To Miles",
  description: "Convert nanometers to miles.",
  usage: ["nmtomi <value>"],
  examples: ["nmtomi 10"],
  group: "conversion",
  fromLabel: "Nanometers",
  toLabel: "Miles",
  factor: 6.21371192237334e-13
});
