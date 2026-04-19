const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sqmmtohectare",
  aliases: ["sqmmtohectare"],
  title: "Square Millimeters To Hectares",
  description: "Convert square millimeters to hectares.",
  usage: ["sqmmtohectare <value>"],
  examples: ["sqmmtohectare 10"],
  group: "conversion",
  fromLabel: "Square Millimeters",
  toLabel: "Hectares",
  factor: 9.999999999999999e-11
});
