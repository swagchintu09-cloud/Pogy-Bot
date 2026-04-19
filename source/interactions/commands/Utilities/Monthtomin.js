const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "monthtomin",
  aliases: ["monthtomin"],
  title: "Months To Minutes",
  description: "Convert months to minutes.",
  usage: ["monthtomin <value>"],
  examples: ["monthtomin 10"],
  group: "conversion",
  fromLabel: "Months",
  toLabel: "Minutes",
  factor: 43830
});
