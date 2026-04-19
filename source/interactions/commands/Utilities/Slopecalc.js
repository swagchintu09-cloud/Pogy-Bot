const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "slopecalc",
  aliases: ["slopecalc"],
  title: "Slope",
  description: "Slope utility.",
  usage: ["slopecalc <left> <right>"],
  examples: ["slopecalc 10 20"],
  group: "math",
  compute: (left, right) => right === 0 ? NaN : left / right
});
