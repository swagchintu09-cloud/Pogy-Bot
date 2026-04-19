const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "ceilnum",
  aliases: ["ceilnum"],
  title: "Ceiling",
  description: "Ceiling utility.",
  usage: ["ceilnum <value>"],
  examples: ["ceilnum 42"],
  group: "math",
  compute: (value) => Math.ceil(value)
});
