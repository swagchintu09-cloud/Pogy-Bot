const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kphtoknot",
  aliases: ["kphtoknot"],
  title: "Kilometers/Hour To Knots",
  description: "Convert kilometers/hour to knots.",
  usage: ["kphtoknot <value>"],
  examples: ["kphtoknot 10"],
  group: "conversion",
  fromLabel: "Kilometers/Hour",
  toLabel: "Knots",
  factor: 0.5399568035455686
});
