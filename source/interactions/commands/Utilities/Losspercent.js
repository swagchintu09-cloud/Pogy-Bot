const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "ratio",
  name: "losspercent",
  aliases: ["losspercent"],
  title: "Loss Percent",
  description: "Loss Percent utility.",
  usage: ["losspercent <left> <right>"],
  examples: ["losspercent 40 50"],
  group: "math",
  suffix: "%",
  compute: (left, right) => ((left - right) / left) * 100
});
