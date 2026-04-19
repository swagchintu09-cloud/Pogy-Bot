const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ydtorod",
  aliases: ["ydtorod"],
  title: "Yards To Rods",
  description: "Convert yards to rods.",
  usage: ["ydtorod <value>"],
  examples: ["ydtorod 10"],
  group: "conversion",
  fromLabel: "Yards",
  toLabel: "Rods",
  factor: 0.1818181818181818
});
