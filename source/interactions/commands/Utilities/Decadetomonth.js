const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "decadetomonth",
  aliases: ["decadetomonth"],
  title: "Decades To Months",
  description: "Convert decades to months.",
  usage: ["decadetomonth <value>"],
  examples: ["decadetomonth 10"],
  group: "conversion",
  fromLabel: "Decades",
  toLabel: "Months",
  factor: 120
});
