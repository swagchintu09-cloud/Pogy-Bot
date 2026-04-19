const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kmtomi",
  aliases: ["kmtomi"],
  title: "Kilometers To Miles",
  description: "Convert kilometers to miles.",
  usage: ["kmtomi <value>"],
  examples: ["kmtomi 10"],
  group: "conversion",
  fromLabel: "Kilometers",
  toLabel: "Miles",
  factor: 0.621371192237334
});
