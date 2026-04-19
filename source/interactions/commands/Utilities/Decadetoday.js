const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "decadetoday",
  aliases: ["decadetoday"],
  title: "Decades To Days",
  description: "Convert decades to days.",
  usage: ["decadetoday <value>"],
  examples: ["decadetoday 10"],
  group: "conversion",
  fromLabel: "Decades",
  toLabel: "Days",
  factor: 3652.5
});
