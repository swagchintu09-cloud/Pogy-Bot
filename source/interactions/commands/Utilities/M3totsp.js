const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "m3totsp",
  aliases: ["m3totsp"],
  title: "Cubic Meters To Teaspoons",
  description: "Convert cubic meters to teaspoons.",
  usage: ["m3totsp <value>"],
  examples: ["m3totsp 10"],
  group: "conversion",
  fromLabel: "Cubic Meters",
  toLabel: "Teaspoons",
  factor: 202884.13621105798
});
