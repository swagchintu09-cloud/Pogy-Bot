const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sttog",
  aliases: ["sttog"],
  title: "Stone To Grams",
  description: "Convert stone to grams.",
  usage: ["sttog <value>"],
  examples: ["sttog 10"],
  group: "conversion",
  fromLabel: "Stone",
  toLabel: "Grams",
  factor: 6350.293180000001
});
