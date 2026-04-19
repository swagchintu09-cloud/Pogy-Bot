const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "speedcalc",
  aliases: ["speedcalc"],
  title: "Speed",
  description: "Speed utility.",
  usage: ["speedcalc <left> <right>"],
  examples: ["speedcalc 10 20"],
  group: "math",
  compute: (left, right) => right === 0 ? NaN : left / right
});
