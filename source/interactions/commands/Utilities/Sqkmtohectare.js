const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqkmtohectare",
  aliases: ["sqkmtohectare"],
  title: "Square Kilometers To Hectares",
  description: "Convert square kilometers to hectares.",
  usage: ["sqkmtohectare <value>"],
  examples: ["sqkmtohectare 10"],
  group: "conversion",
  fromLabel: "Square Kilometers",
  toLabel: "Hectares",
  factor: 100
});
