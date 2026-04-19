const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "weektomonth",
  aliases: ["weektomonth"],
  title: "Weeks To Months",
  description: "Convert weeks to months.",
  usage: ["weektomonth <value>"],
  examples: ["weektomonth 10"],
  group: "conversion",
  fromLabel: "Weeks",
  toLabel: "Months",
  factor: 0.2299794661190965
});
