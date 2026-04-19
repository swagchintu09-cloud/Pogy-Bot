const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "fttomi",
  aliases: ["fttomi"],
  title: "Feet To Miles",
  description: "Convert feet to miles.",
  usage: ["fttomi <value>"],
  examples: ["fttomi 10"],
  group: "conversion",
  fromLabel: "Feet",
  toLabel: "Miles",
  factor: 0.0001893939393939394
});
