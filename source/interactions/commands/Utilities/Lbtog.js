const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "lbtog",
  aliases: ["lbtog"],
  title: "Pounds To Grams",
  description: "Convert pounds to grams.",
  usage: ["lbtog <value>"],
  examples: ["lbtog 10"],
  group: "conversion",
  fromLabel: "Pounds",
  toLabel: "Grams",
  factor: 453.59237
});
