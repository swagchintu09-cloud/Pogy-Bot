const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "ratio",
  name: "occupancypercent",
  aliases: ["occupancypercent"],
  title: "Occupancy Percent",
  description: "Occupancy Percent utility.",
  usage: ["occupancypercent <left> <right>"],
  examples: ["occupancypercent 40 50"],
  group: "math",
  suffix: "%",
  compute: (left, right) => (left / right) * 100
});
