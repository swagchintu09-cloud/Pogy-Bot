const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "ttolb",
  aliases: ["ttolb"],
  title: "Metric Tons To Pounds",
  description: "Convert metric tons to pounds.",
  usage: ["ttolb <value>"],
  examples: ["ttolb 10"],
  group: "conversion",
  fromLabel: "Metric Tons",
  toLabel: "Pounds",
  factor: 2204.622621848776
});
