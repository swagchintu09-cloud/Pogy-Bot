const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "thirdvalue",
  aliases: ["thirdvalue"],
  title: "Third Value",
  description: "Third Value utility.",
  usage: ["thirdvalue <value>"],
  examples: ["thirdvalue 42"],
  group: "math",
  compute: (value) => value / 3
});
