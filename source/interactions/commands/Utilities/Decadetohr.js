const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "decadetohr",
  aliases: ["decadetohr"],
  title: "Decades To Hours",
  description: "Convert decades to hours.",
  usage: ["decadetohr <value>"],
  examples: ["decadetohr 10"],
  group: "conversion",
  fromLabel: "Decades",
  toLabel: "Hours",
  factor: 87660
});
