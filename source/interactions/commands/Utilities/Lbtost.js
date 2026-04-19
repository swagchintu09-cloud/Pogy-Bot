const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "lbtost",
  aliases: ["lbtost"],
  title: "Pounds To Stone",
  description: "Convert pounds to stone.",
  usage: ["lbtost <value>"],
  examples: ["lbtost 10"],
  group: "conversion",
  fromLabel: "Pounds",
  toLabel: "Stone",
  factor: 0.07142857142857142
});
