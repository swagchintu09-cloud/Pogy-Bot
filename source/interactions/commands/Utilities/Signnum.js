const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "signnum",
  aliases: ["signnum"],
  title: "Sign",
  description: "Sign utility.",
  usage: ["signnum <value>"],
  examples: ["signnum 42"],
  group: "math",
  compute: (value) => Math.sign(value)
});
