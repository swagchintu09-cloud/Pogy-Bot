const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "absolute",
  aliases: ["absolute"],
  title: "Absolute Value",
  description: "Absolute Value utility.",
  usage: ["absolute <value>"],
  examples: ["absolute 42"],
  group: "math",
  compute: (value) => Math.abs(value)
});
