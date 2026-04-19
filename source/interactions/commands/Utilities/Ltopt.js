const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ltopt",
  aliases: ["ltopt"],
  title: "Liters To Pints",
  description: "Convert liters to pints.",
  usage: ["ltopt <value>"],
  examples: ["ltopt 10"],
  group: "conversion",
  fromLabel: "Liters",
  toLabel: "Pints",
  factor: 2.1133764188651876
});
