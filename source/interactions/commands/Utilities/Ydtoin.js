const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ydtoin",
  aliases: ["ydtoin"],
  title: "Yards To Inches",
  description: "Convert yards to inches.",
  usage: ["ydtoin <value>"],
  examples: ["ydtoin 10"],
  group: "conversion",
  fromLabel: "Yards",
  toLabel: "Inches",
  factor: 36
});
