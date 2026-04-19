const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "ratio",
  name: "winratecalc",
  aliases: ["winratecalc"],
  title: "Win Rate",
  description: "Win Rate utility.",
  usage: ["winratecalc <left> <right>"],
  examples: ["winratecalc 40 50"],
  group: "math",
  suffix: "%",
  compute: (left, right) => (left / right) * 100
});
