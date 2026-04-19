const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "ratio",
  name: "completionpercent",
  aliases: ["completionpercent"],
  title: "Completion Percent",
  description: "Completion Percent utility.",
  usage: ["completionpercent <left> <right>"],
  examples: ["completionpercent 40 50"],
  group: "math",
  suffix: "%",
  compute: (left, right) => (left / right) * 100
});
