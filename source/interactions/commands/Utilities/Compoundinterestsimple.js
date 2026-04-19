const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "compoundinterestsimple",
  aliases: ["compoundinterestsimple"],
  title: "Simple Interest",
  description: "Simple Interest utility.",
  usage: ["compoundinterestsimple <left> <right>"],
  examples: ["compoundinterestsimple 10 20"],
  group: "math",
  compute: (left, right) => (left * right) / 100
});
