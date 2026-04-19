const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "galtopt",
  aliases: ["galtopt"],
  title: "Gallons To Pints",
  description: "Convert gallons to pints.",
  usage: ["galtopt <value>"],
  examples: ["galtopt 10"],
  group: "conversion",
  fromLabel: "Gallons",
  toLabel: "Pints",
  factor: 8
});
