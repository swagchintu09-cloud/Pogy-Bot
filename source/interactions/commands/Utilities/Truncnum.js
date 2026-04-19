const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "truncnum",
  aliases: ["truncnum"],
  title: "Truncate Number",
  description: "Truncate Number utility.",
  usage: ["truncnum <value>"],
  examples: ["truncnum 42"],
  group: "math",
  compute: (value) => Math.trunc(value)
});
