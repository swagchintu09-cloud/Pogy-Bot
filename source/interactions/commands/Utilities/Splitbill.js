const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "splitbill",
  aliases: ["splitbill"],
  title: "Split Bill",
  description: "Split Bill utility.",
  usage: ["splitbill <left> <right>"],
  examples: ["splitbill 10 20"],
  group: "math",
  compute: (left, right) => right === 0 ? NaN : left / right
});
