const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "expvalue",
  aliases: ["expvalue"],
  title: "Exponent",
  description: "Exponent utility.",
  usage: ["expvalue <value>"],
  examples: ["expvalue 42"],
  group: "math",
  compute: (value) => Math.exp(value)
});
