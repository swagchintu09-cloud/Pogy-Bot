const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "centurytoyear",
  aliases: ["centurytoyear"],
  title: "Centuries To Years",
  description: "Convert centuries to years.",
  usage: ["centurytoyear <value>"],
  examples: ["centurytoyear 10"],
  group: "conversion",
  fromLabel: "Centuries",
  toLabel: "Years",
  factor: 100
});
