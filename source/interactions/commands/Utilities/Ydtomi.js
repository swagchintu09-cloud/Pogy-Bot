const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ydtomi",
  aliases: ["ydtomi"],
  title: "Yards To Miles",
  description: "Convert yards to miles.",
  usage: ["ydtomi <value>"],
  examples: ["ydtomi 10"],
  group: "conversion",
  fromLabel: "Yards",
  toLabel: "Miles",
  factor: 0.0005681818181818182
});
