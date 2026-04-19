const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "finalpricewithtax",
  aliases: ["finalpricewithtax"],
  title: "Final Price With Tax",
  description: "Final Price With Tax utility.",
  usage: ["finalpricewithtax <left> <right>"],
  examples: ["finalpricewithtax 10 20"],
  group: "math",
  compute: (left, right) => left + (left * (right / 100))
});
