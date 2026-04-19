const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqmtohectare",
  aliases: ["sqmtohectare"],
  title: "Square Meters To Hectares",
  description: "Convert square meters to hectares.",
  usage: ["sqmtohectare <value>"],
  examples: ["sqmtohectare 10"],
  group: "conversion",
  fromLabel: "Square Meters",
  toLabel: "Hectares",
  factor: 0.0001
});
