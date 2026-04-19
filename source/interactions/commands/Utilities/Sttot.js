const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sttot",
  aliases: ["sttot"],
  title: "Stone To Metric Tons",
  description: "Convert stone to metric tons.",
  usage: ["sttot <value>"],
  examples: ["sttot 10"],
  group: "conversion",
  fromLabel: "Stone",
  toLabel: "Metric Tons",
  factor: 0.00635029318
});
