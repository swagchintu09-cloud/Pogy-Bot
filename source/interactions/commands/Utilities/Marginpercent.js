const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "ratio",
  name: "marginpercent",
  aliases: ["marginpercent"],
  title: "Margin Percent",
  description: "Margin Percent utility.",
  usage: ["marginpercent <left> <right>"],
  examples: ["marginpercent 40 50"],
  group: "math",
  suffix: "%",
  compute: (left, right) => ((left - right) / left) * 100
});
