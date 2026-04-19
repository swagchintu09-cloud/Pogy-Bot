const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "densitycalc",
  aliases: ["densitycalc"],
  title: "Density",
  description: "Density utility.",
  usage: ["densitycalc <left> <right>"],
  examples: ["densitycalc 10 20"],
  group: "math",
  compute: (left, right) => right === 0 ? NaN : left / right
});
