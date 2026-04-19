const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "modulonums",
  aliases: ["modulonums"],
  title: "Modulo",
  description: "Modulo utility.",
  usage: ["modulonums <left> <right>"],
  examples: ["modulonums 10 20"],
  group: "math",
  compute: (left, right) => right === 0 ? NaN : left % right
});
