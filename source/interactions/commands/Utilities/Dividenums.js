const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "dividenums",
  aliases: ["dividenums"],
  title: "Divide Numbers",
  description: "Divide Numbers utility.",
  usage: ["dividenums <left> <right>"],
  examples: ["dividenums 10 20"],
  group: "math",
  compute: (left, right) => right === 0 ? NaN : left / right
});
