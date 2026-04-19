const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "minnum",
  aliases: ["minnum"],
  title: "Minimum",
  description: "Minimum utility.",
  usage: ["minnum <left> <right>"],
  examples: ["minnum 10 20"],
  group: "math",
  compute: (left, right) => Math.min(left, right)
});
