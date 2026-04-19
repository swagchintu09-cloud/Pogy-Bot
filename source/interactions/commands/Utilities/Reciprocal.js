const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "reciprocal",
  aliases: ["reciprocal"],
  title: "Reciprocal",
  description: "Reciprocal utility.",
  usage: ["reciprocal <value>"],
  examples: ["reciprocal 42"],
  group: "math",
  compute: (value) => 1 / value
});
