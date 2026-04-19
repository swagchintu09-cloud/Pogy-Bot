const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "ratio",
  name: "lefttorightpercent",
  aliases: ["lefttorightpercent"],
  title: "Left To Right Percent",
  description: "Left To Right Percent utility.",
  usage: ["lefttorightpercent <left> <right>"],
  examples: ["lefttorightpercent 40 50"],
  group: "math",
  suffix: "%",
  compute: (left, right) => (left / right) * 100
});
