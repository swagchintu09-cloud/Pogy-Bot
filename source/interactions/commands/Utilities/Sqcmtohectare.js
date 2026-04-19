const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqcmtohectare",
  aliases: ["sqcmtohectare"],
  title: "Square Centimeters To Hectares",
  description: "Convert square centimeters to hectares.",
  usage: ["sqcmtohectare <value>"],
  examples: ["sqcmtohectare 10"],
  group: "conversion",
  fromLabel: "Square Centimeters",
  toLabel: "Hectares",
  factor: 1e-8
});
