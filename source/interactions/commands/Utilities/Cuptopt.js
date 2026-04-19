const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "cuptopt",
  aliases: ["cuptopt"],
  title: "Cups To Pints",
  description: "Convert cups to pints.",
  usage: ["cuptopt <value>"],
  examples: ["cuptopt 10"],
  group: "conversion",
  fromLabel: "Cups",
  toLabel: "Pints",
  factor: 0.5
});
