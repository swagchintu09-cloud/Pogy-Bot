const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kphtofps",
  aliases: ["kphtofps"],
  title: "Kilometers/Hour To Feet/Second",
  description: "Convert kilometers/hour to feet/second.",
  usage: ["kphtofps <value>"],
  examples: ["kphtofps 10"],
  group: "conversion",
  fromLabel: "Kilometers/Hour",
  toLabel: "Feet/Second",
  factor: 0.9113444153543308
});
