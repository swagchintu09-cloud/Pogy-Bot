const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "lbtous_ton",
  aliases: ["lbtous_ton"],
  title: "Pounds To US Tons",
  description: "Convert pounds to us tons.",
  usage: ["lbtous_ton <value>"],
  examples: ["lbtous_ton 10"],
  group: "conversion",
  fromLabel: "Pounds",
  toLabel: "US Tons",
  factor: 0.0005
});
