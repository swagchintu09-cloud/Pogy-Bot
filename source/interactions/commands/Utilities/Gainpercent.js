const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "ratio",
  name: "gainpercent",
  aliases: ["gainpercent"],
  title: "Gain Percent",
  description: "Gain Percent utility.",
  usage: ["gainpercent <left> <right>"],
  examples: ["gainpercent 40 50"],
  group: "math",
  suffix: "%",
  compute: (left, right) => ((right - left) / left) * 100
});
