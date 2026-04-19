const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "centurytomonth",
  aliases: ["centurytomonth"],
  title: "Centuries To Months",
  description: "Convert centuries to months.",
  usage: ["centurytomonth <value>"],
  examples: ["centurytomonth 10"],
  group: "conversion",
  fromLabel: "Centuries",
  toLabel: "Months",
  factor: 1200
});
