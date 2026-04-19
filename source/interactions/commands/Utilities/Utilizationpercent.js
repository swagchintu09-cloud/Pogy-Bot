const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "ratio",
  name: "utilizationpercent",
  aliases: ["utilizationpercent"],
  title: "Utilization Percent",
  description: "Utilization Percent utility.",
  usage: ["utilizationpercent <left> <right>"],
  examples: ["utilizationpercent 40 50"],
  group: "math",
  suffix: "%",
  compute: (left, right) => (left / right) * 100
});
