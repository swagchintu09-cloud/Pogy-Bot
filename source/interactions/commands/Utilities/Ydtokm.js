const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ydtokm",
  aliases: ["ydtokm"],
  title: "Yards To Kilometers",
  description: "Convert yards to kilometers.",
  usage: ["ydtokm <value>"],
  examples: ["ydtokm 10"],
  group: "conversion",
  fromLabel: "Yards",
  toLabel: "Kilometers",
  factor: 0.0009144
});
