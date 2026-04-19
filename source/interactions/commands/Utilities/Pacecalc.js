const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "pacecalc",
  aliases: ["pacecalc"],
  title: "Pace",
  description: "Pace utility.",
  usage: ["pacecalc <left> <right>"],
  examples: ["pacecalc 10 20"],
  group: "math",
  compute: (left, right) => left === 0 ? NaN : right / left
});
