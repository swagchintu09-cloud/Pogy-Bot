const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "fttokm",
  aliases: ["fttokm"],
  title: "Feet To Kilometers",
  description: "Convert feet to kilometers.",
  usage: ["fttokm <value>"],
  examples: ["fttokm 10"],
  group: "conversion",
  fromLabel: "Feet",
  toLabel: "Kilometers",
  factor: 0.00030480000000000004
});
