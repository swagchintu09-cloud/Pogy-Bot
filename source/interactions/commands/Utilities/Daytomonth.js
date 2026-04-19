const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "daytomonth",
  aliases: ["daytomonth"],
  title: "Days To Months",
  description: "Convert days to months.",
  usage: ["daytomonth <value>"],
  examples: ["daytomonth 10"],
  group: "conversion",
  fromLabel: "Days",
  toLabel: "Months",
  factor: 0.03285420944558522
});
