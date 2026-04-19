const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "maxnum",
  aliases: ["maxnum"],
  title: "Maximum",
  description: "Maximum utility.",
  usage: ["maxnum <left> <right>"],
  examples: ["maxnum 10 20"],
  group: "math",
  compute: (left, right) => Math.max(left, right)
});
