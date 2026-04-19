const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "comparegap",
  aliases: ["comparegap"],
  title: "Comparison Gap",
  description: "Comparison Gap utility.",
  usage: ["comparegap <left> <right>"],
  examples: ["comparegap 10 20"],
  group: "math",
  compute: (left, right) => Math.abs(left - right)
});
