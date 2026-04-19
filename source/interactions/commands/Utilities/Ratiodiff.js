const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "ratiodiff",
  aliases: ["ratiodiff"],
  title: "Ratio Difference",
  description: "Ratio Difference utility.",
  usage: ["ratiodiff <left> <right>"],
  examples: ["ratiodiff 10 20"],
  group: "math",
  compute: (left, right) => right === 0 ? NaN : (left / right)
});
