const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ydtom",
  aliases: ["ydtom"],
  title: "Yards To Meters",
  description: "Convert yards to meters.",
  usage: ["ydtom <value>"],
  examples: ["ydtom 10"],
  group: "conversion",
  fromLabel: "Yards",
  toLabel: "Meters",
  factor: 0.9144
});
