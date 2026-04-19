const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sectoyear",
  aliases: ["sectoyear"],
  title: "Seconds To Years",
  description: "Convert seconds to years.",
  usage: ["sectoyear <value>"],
  examples: ["sectoyear 10"],
  group: "conversion",
  fromLabel: "Seconds",
  toLabel: "Years",
  factor: 3.168808781402895e-8
});
