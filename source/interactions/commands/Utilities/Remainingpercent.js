const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "ratio",
  name: "remainingpercent",
  aliases: ["remainingpercent"],
  title: "Remaining Percent",
  description: "Remaining Percent utility.",
  usage: ["remainingpercent <left> <right>"],
  examples: ["remainingpercent 40 50"],
  group: "math",
  suffix: "%",
  compute: (left, right) => 100 - ((left / right) * 100)
});
