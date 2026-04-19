const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "lbtot",
  aliases: ["lbtot"],
  title: "Pounds To Metric Tons",
  description: "Convert pounds to metric tons.",
  usage: ["lbtot <value>"],
  examples: ["lbtot 10"],
  group: "conversion",
  fromLabel: "Pounds",
  toLabel: "Metric Tons",
  factor: 0.00045359237000000004
});
