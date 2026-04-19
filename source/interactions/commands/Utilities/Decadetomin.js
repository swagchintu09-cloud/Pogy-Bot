const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "decadetomin",
  aliases: ["decadetomin"],
  title: "Decades To Minutes",
  description: "Convert decades to minutes.",
  usage: ["decadetomin <value>"],
  examples: ["decadetomin 10"],
  group: "conversion",
  fromLabel: "Decades",
  toLabel: "Minutes",
  factor: 5259600
});
