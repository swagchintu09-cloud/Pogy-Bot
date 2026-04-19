const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ltotbsp",
  aliases: ["ltotbsp"],
  title: "Liters To Tablespoons",
  description: "Convert liters to tablespoons.",
  usage: ["ltotbsp <value>"],
  examples: ["ltotbsp 10"],
  group: "conversion",
  fromLabel: "Liters",
  toLabel: "Tablespoons",
  factor: 67.628045403686
});
