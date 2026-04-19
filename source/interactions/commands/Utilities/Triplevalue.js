const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "triplevalue",
  aliases: ["triplevalue"],
  title: "Triple Value",
  description: "Triple Value utility.",
  usage: ["triplevalue <value>"],
  examples: ["triplevalue 42"],
  group: "math",
  compute: (value) => value * 3
});
