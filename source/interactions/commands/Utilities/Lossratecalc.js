const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "ratio",
  name: "lossratecalc",
  aliases: ["lossratecalc"],
  title: "Loss Rate",
  description: "Loss Rate utility.",
  usage: ["lossratecalc <left> <right>"],
  examples: ["lossratecalc 40 50"],
  group: "math",
  suffix: "%",
  compute: (left, right) => (left / right) * 100
});
