const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "m3tofloz",
  aliases: ["m3tofloz"],
  title: "Cubic Meters To Fluid Ounces",
  description: "Convert cubic meters to fluid ounces.",
  usage: ["m3tofloz <value>"],
  examples: ["m3tofloz 10"],
  group: "conversion",
  fromLabel: "Cubic Meters",
  toLabel: "Fluid Ounces",
  factor: 33814.022701843
});
