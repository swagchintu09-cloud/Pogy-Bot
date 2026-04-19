const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "galtom3",
  aliases: ["galtom3"],
  title: "Gallons To Cubic Meters",
  description: "Convert gallons to cubic meters.",
  usage: ["galtom3 <value>"],
  examples: ["galtom3 10"],
  group: "conversion",
  fromLabel: "Gallons",
  toLabel: "Cubic Meters",
  factor: 0.0037854117839999997
});
