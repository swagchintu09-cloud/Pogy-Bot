const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "ratio",
  name: "righttoleftpercent",
  aliases: ["righttoleftpercent"],
  title: "Right To Left Percent",
  description: "Right To Left Percent utility.",
  usage: ["righttoleftpercent <left> <right>"],
  examples: ["righttoleftpercent 40 50"],
  group: "math",
  suffix: "%",
  compute: (left, right) => (right / left) * 100
});
