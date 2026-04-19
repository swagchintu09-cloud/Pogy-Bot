const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sectomonth",
  aliases: ["sectomonth"],
  title: "Seconds To Months",
  description: "Convert seconds to months.",
  usage: ["sectomonth <value>"],
  examples: ["sectomonth 10"],
  group: "conversion",
  fromLabel: "Seconds",
  toLabel: "Months",
  factor: 3.802570537683474e-7
});
