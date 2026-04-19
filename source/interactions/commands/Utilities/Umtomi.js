const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "umtomi",
  aliases: ["umtomi"],
  title: "Micrometers To Miles",
  description: "Convert micrometers to miles.",
  usage: ["umtomi <value>"],
  examples: ["umtomi 10"],
  group: "conversion",
  fromLabel: "Micrometers",
  toLabel: "Miles",
  factor: 6.21371192237334e-10
});
