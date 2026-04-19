const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "halvevalue",
  aliases: ["halvevalue"],
  title: "Half Value",
  description: "Half Value utility.",
  usage: ["halvevalue <value>"],
  examples: ["halvevalue 42"],
  group: "math",
  compute: (value) => value / 2
});
