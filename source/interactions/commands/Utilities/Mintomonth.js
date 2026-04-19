const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mintomonth",
  aliases: ["mintomonth"],
  title: "Minutes To Months",
  description: "Convert minutes to months.",
  usage: ["mintomonth <value>"],
  examples: ["mintomonth 10"],
  group: "conversion",
  fromLabel: "Minutes",
  toLabel: "Months",
  factor: 0.000022815423226100844
});
