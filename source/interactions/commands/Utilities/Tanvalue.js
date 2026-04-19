const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "tanvalue",
  aliases: ["tanvalue"],
  title: "Tangent",
  description: "Tangent utility.",
  usage: ["tanvalue <value>"],
  examples: ["tanvalue 42"],
  group: "math",
  compute: (value) => Math.tan(value)
});
