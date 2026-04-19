const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "doublevalue",
  aliases: ["doublevalue"],
  title: "Double Value",
  description: "Double Value utility.",
  usage: ["doublevalue <value>"],
  examples: ["doublevalue 42"],
  group: "math",
  compute: (value) => value * 2
});
