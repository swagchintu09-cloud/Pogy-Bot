const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kphtomph",
  aliases: ["kphtomph"],
  title: "Kilometers/Hour To Miles/Hour",
  description: "Convert kilometers/hour to miles/hour.",
  usage: ["kphtomph <value>"],
  examples: ["kphtomph 10"],
  group: "conversion",
  fromLabel: "Kilometers/Hour",
  toLabel: "Miles/Hour",
  factor: 0.6213711922870437
});
