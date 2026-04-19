const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sttous_ton",
  aliases: ["sttous_ton"],
  title: "Stone To US Tons",
  description: "Convert stone to us tons.",
  usage: ["sttous_ton <value>"],
  examples: ["sttous_ton 10"],
  group: "conversion",
  fromLabel: "Stone",
  toLabel: "US Tons",
  factor: 0.007
});
