const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ltofloz",
  aliases: ["ltofloz"],
  title: "Liters To Fluid Ounces",
  description: "Convert liters to fluid ounces.",
  usage: ["ltofloz <value>"],
  examples: ["ltofloz 10"],
  group: "conversion",
  fromLabel: "Liters",
  toLabel: "Fluid Ounces",
  factor: 33.814022701843
});
