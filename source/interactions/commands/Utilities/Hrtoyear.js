const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "hrtoyear",
  aliases: ["hrtoyear"],
  title: "Hours To Years",
  description: "Convert hours to years.",
  usage: ["hrtoyear <value>"],
  examples: ["hrtoyear 10"],
  group: "conversion",
  fromLabel: "Hours",
  toLabel: "Years",
  factor: 0.00011407711613050422
});
