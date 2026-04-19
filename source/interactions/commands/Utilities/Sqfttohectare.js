const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqfttohectare",
  aliases: ["sqfttohectare"],
  title: "Square Feet To Hectares",
  description: "Convert square feet to hectares.",
  usage: ["sqfttohectare <value>"],
  examples: ["sqfttohectare 10"],
  group: "conversion",
  fromLabel: "Square Feet",
  toLabel: "Hectares",
  factor: 0.000009290304
});
