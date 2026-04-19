const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ltom3",
  aliases: ["ltom3"],
  title: "Liters To Cubic Meters",
  description: "Convert liters to cubic meters.",
  usage: ["ltom3 <value>"],
  examples: ["ltom3 10"],
  group: "conversion",
  fromLabel: "Liters",
  toLabel: "Cubic Meters",
  factor: 0.001
});
