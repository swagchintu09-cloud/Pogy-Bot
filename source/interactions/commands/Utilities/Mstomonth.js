const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mstomonth",
  aliases: ["mstomonth"],
  title: "Milliseconds To Months",
  description: "Convert milliseconds to months.",
  usage: ["mstomonth <value>"],
  examples: ["mstomonth 10"],
  group: "conversion",
  fromLabel: "Milliseconds",
  toLabel: "Months",
  factor: 3.802570537683474e-10
});
