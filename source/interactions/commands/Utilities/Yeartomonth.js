const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "yeartomonth",
  aliases: ["yeartomonth"],
  title: "Years To Months",
  description: "Convert years to months.",
  usage: ["yeartomonth <value>"],
  examples: ["yeartomonth 10"],
  group: "conversion",
  fromLabel: "Years",
  toLabel: "Months",
  factor: 12
});
