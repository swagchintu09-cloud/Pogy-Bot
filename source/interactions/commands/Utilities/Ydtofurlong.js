const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ydtofurlong",
  aliases: ["ydtofurlong"],
  title: "Yards To Furlongs",
  description: "Convert yards to furlongs.",
  usage: ["ydtofurlong <value>"],
  examples: ["ydtofurlong 10"],
  group: "conversion",
  fromLabel: "Yards",
  toLabel: "Furlongs",
  factor: 0.004545454545454545
});
