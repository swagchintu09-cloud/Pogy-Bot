const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "qttotsp",
  aliases: ["qttotsp"],
  title: "Quarts To Teaspoons",
  description: "Convert quarts to teaspoons.",
  usage: ["qttotsp <value>"],
  examples: ["qttotsp 10"],
  group: "conversion",
  fromLabel: "Quarts",
  toLabel: "Teaspoons",
  factor: 192
});
