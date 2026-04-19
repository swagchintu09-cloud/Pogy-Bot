const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqydtohectare",
  aliases: ["sqydtohectare"],
  title: "Square Yards To Hectares",
  description: "Convert square yards to hectares.",
  usage: ["sqydtohectare <value>"],
  examples: ["sqydtohectare 10"],
  group: "conversion",
  fromLabel: "Square Yards",
  toLabel: "Hectares",
  factor: 0.000083612736
});
