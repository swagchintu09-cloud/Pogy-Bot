const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ydtonmi",
  aliases: ["ydtonmi"],
  title: "Yards To Nautical Miles",
  description: "Convert yards to nautical miles.",
  usage: ["ydtonmi <value>"],
  examples: ["ydtonmi 10"],
  group: "conversion",
  fromLabel: "Yards",
  toLabel: "Nautical Miles",
  factor: 0.0004937365010799136
});
