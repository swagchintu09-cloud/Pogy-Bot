const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "invertnumber",
  aliases: ["invertnumber"],
  title: "Invert Sign",
  description: "Invert Sign utility.",
  usage: ["invertnumber <value>"],
  examples: ["invertnumber 42"],
  group: "math",
  compute: (value) => -value
});
