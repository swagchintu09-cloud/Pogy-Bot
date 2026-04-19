const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "decadetoyear",
  aliases: ["decadetoyear"],
  title: "Decades To Years",
  description: "Convert decades to years.",
  usage: ["decadetoyear <value>"],
  examples: ["decadetoyear 10"],
  group: "conversion",
  fromLabel: "Decades",
  toLabel: "Years",
  factor: 10
});
