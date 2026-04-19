const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "weektoyear",
  aliases: ["weektoyear"],
  title: "Weeks To Years",
  description: "Convert weeks to years.",
  usage: ["weektoyear <value>"],
  examples: ["weektoyear 10"],
  group: "conversion",
  fromLabel: "Weeks",
  toLabel: "Years",
  factor: 0.019164955509924708
});
