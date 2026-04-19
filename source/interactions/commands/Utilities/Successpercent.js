const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "ratio",
  name: "successpercent",
  aliases: ["successpercent"],
  title: "Success Percent",
  description: "Success Percent utility.",
  usage: ["successpercent <left> <right>"],
  examples: ["successpercent 40 50"],
  group: "math",
  suffix: "%",
  compute: (left, right) => (left / right) * 100
});
