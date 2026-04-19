const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "log10value",
  aliases: ["log10value"],
  title: "Log Base 10",
  description: "Log Base 10 utility.",
  usage: ["log10value <value>"],
  examples: ["log10value 42"],
  group: "math",
  compute: (value) => Math.log10(value)
});
