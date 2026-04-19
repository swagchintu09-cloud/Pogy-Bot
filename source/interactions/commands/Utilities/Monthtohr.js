const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "monthtohr",
  aliases: ["monthtohr"],
  title: "Months To Hours",
  description: "Convert months to hours.",
  usage: ["monthtohr <value>"],
  examples: ["monthtohr 10"],
  group: "conversion",
  fromLabel: "Months",
  toLabel: "Hours",
  factor: 730.5
});
