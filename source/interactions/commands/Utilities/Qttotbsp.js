const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "qttotbsp",
  aliases: ["qttotbsp"],
  title: "Quarts To Tablespoons",
  description: "Convert quarts to tablespoons.",
  usage: ["qttotbsp <value>"],
  examples: ["qttotbsp 10"],
  group: "conversion",
  fromLabel: "Quarts",
  toLabel: "Tablespoons",
  factor: 64
});
