const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "acretohectare",
  aliases: ["acretohectare"],
  title: "Acres To Hectares",
  description: "Convert acres to hectares.",
  usage: ["acretohectare <value>"],
  examples: ["acretohectare 10"],
  group: "conversion",
  fromLabel: "Acres",
  toLabel: "Hectares",
  factor: 0.40468564224000003
});
