const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "pressurecalc",
  aliases: ["pressurecalc"],
  title: "Pressure",
  description: "Pressure utility.",
  usage: ["pressurecalc <left> <right>"],
  examples: ["pressurecalc 10 20"],
  group: "math",
  compute: (left, right) => right === 0 ? NaN : left / right
});
