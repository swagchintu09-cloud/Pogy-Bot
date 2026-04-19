const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "hrtomonth",
  aliases: ["hrtomonth"],
  title: "Hours To Months",
  description: "Convert hours to months.",
  usage: ["hrtomonth <value>"],
  examples: ["hrtomonth 10"],
  group: "conversion",
  fromLabel: "Hours",
  toLabel: "Months",
  factor: 0.0013689253935660506
});
