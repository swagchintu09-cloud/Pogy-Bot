const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "sinvalue",
  aliases: ["sinvalue"],
  title: "Sine",
  description: "Sine utility.",
  usage: ["sinvalue <value>"],
  examples: ["sinvalue 42"],
  group: "math",
  compute: (value) => Math.sin(value)
});
