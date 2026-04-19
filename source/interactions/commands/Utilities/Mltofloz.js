const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mltofloz",
  aliases: ["mltofloz"],
  title: "Milliliters To Fluid Ounces",
  description: "Convert milliliters to fluid ounces.",
  usage: ["mltofloz <value>"],
  examples: ["mltofloz 10"],
  group: "conversion",
  fromLabel: "Milliliters",
  toLabel: "Fluid Ounces",
  factor: 0.033814022701843
});
