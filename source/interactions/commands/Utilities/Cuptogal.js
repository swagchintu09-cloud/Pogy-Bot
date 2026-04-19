const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "cuptogal",
  aliases: ["cuptogal"],
  title: "Cups To Gallons",
  description: "Convert cups to gallons.",
  usage: ["cuptogal <value>"],
  examples: ["cuptogal 10"],
  group: "conversion",
  fromLabel: "Cups",
  toLabel: "Gallons",
  factor: 0.0625
});
