const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "ratio",
  name: "markuppercent",
  aliases: ["markuppercent"],
  title: "Markup Percent",
  description: "Markup Percent utility.",
  usage: ["markuppercent <left> <right>"],
  examples: ["markuppercent 40 50"],
  group: "math",
  suffix: "%",
  compute: (left, right) => ((right - left) / right) * 100
});
