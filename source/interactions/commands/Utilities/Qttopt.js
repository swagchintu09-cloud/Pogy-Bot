const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "qttopt",
  aliases: ["qttopt"],
  title: "Quarts To Pints",
  description: "Convert quarts to pints.",
  usage: ["qttopt <value>"],
  examples: ["qttopt 10"],
  group: "conversion",
  fromLabel: "Quarts",
  toLabel: "Pints",
  factor: 2
});
