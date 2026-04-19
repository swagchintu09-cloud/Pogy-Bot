const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "quartervalue",
  aliases: ["quartervalue"],
  title: "Quarter Value",
  description: "Quarter Value utility.",
  usage: ["quartervalue <value>"],
  examples: ["quartervalue 42"],
  group: "math",
  compute: (value) => value / 4
});
