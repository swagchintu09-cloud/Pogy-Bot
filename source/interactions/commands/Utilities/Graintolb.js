const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "graintolb",
  aliases: ["graintolb"],
  title: "Grains To Pounds",
  description: "Convert grains to pounds.",
  usage: ["graintolb <value>"],
  examples: ["graintolb 10"],
  group: "conversion",
  fromLabel: "Grains",
  toLabel: "Pounds",
  factor: 0.00014285714285714284
});
