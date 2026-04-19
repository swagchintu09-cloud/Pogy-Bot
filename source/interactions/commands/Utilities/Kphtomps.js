const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kphtomps",
  aliases: ["kphtomps"],
  title: "Kilometers/Hour To Meters/Second",
  description: "Convert kilometers/hour to meters/second.",
  usage: ["kphtomps <value>"],
  examples: ["kphtomps 10"],
  group: "conversion",
  fromLabel: "Kilometers/Hour",
  toLabel: "Meters/Second",
  factor: 0.2777777778
});
