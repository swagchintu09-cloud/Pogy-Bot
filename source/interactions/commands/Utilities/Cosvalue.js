const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "cosvalue",
  aliases: ["cosvalue"],
  title: "Cosine",
  description: "Cosine utility.",
  usage: ["cosvalue <value>"],
  examples: ["cosvalue 42"],
  group: "math",
  compute: (value) => Math.cos(value)
});
