const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "negatevalue",
  aliases: ["negatevalue"],
  title: "Negate Value",
  description: "Negate Value utility.",
  usage: ["negatevalue <value>"],
  examples: ["negatevalue 42"],
  group: "math",
  compute: (value) => -value
});
