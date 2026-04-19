const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "yeartoweek",
  aliases: ["yeartoweek"],
  title: "Years To Weeks",
  description: "Convert years to weeks.",
  usage: ["yeartoweek <value>"],
  examples: ["yeartoweek 10"],
  group: "conversion",
  fromLabel: "Years",
  toLabel: "Weeks",
  factor: 52.17857142857143
});
