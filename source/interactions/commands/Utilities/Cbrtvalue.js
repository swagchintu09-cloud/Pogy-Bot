const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "cbrtvalue",
  aliases: ["cbrtvalue"],
  title: "Cube Root",
  description: "Cube Root utility.",
  usage: ["cbrtvalue <value>"],
  examples: ["cbrtvalue 42"],
  group: "math",
  compute: (value) => Math.cbrt(value)
});
