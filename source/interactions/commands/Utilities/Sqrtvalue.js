const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "sqrtvalue",
  aliases: ["sqrtvalue"],
  title: "Square Root",
  description: "Square Root utility.",
  usage: ["sqrtvalue <value>"],
  examples: ["sqrtvalue 42"],
  group: "math",
  compute: (value) => Math.sqrt(value)
});
