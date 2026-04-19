const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ltotsp",
  aliases: ["ltotsp"],
  title: "Liters To Teaspoons",
  description: "Convert liters to teaspoons.",
  usage: ["ltotsp <value>"],
  examples: ["ltotsp 10"],
  group: "conversion",
  fromLabel: "Liters",
  toLabel: "Teaspoons",
  factor: 202.88413621105798
});
