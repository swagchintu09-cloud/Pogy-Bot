const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ydtoft",
  aliases: ["ydtoft"],
  title: "Yards To Feet",
  description: "Convert yards to feet.",
  usage: ["ydtoft <value>"],
  examples: ["ydtoft 10"],
  group: "conversion",
  fromLabel: "Yards",
  toLabel: "Feet",
  factor: 3
});
