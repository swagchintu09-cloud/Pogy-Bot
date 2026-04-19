const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "ratio",
  name: "failurepercent",
  aliases: ["failurepercent"],
  title: "Failure Percent",
  description: "Failure Percent utility.",
  usage: ["failurepercent <left> <right>"],
  examples: ["failurepercent 40 50"],
  group: "math",
  suffix: "%",
  compute: (left, right) => (left / right) * 100
});
