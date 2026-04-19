const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ydtoleague",
  aliases: ["ydtoleague"],
  title: "Yards To Leagues",
  description: "Convert yards to leagues.",
  usage: ["ydtoleague <value>"],
  examples: ["ydtoleague 10"],
  group: "conversion",
  fromLabel: "Yards",
  toLabel: "Leagues",
  factor: 0.0001893939393939394
});
