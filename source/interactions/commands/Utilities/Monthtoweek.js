const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "monthtoweek",
  aliases: ["monthtoweek"],
  title: "Months To Weeks",
  description: "Convert months to weeks.",
  usage: ["monthtoweek <value>"],
  examples: ["monthtoweek 10"],
  group: "conversion",
  fromLabel: "Months",
  toLabel: "Weeks",
  factor: 4.348214285714286
});
