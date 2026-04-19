const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "sectoweek",
  aliases: ["sectoweek"],
  title: "Seconds To Weeks",
  description: "Convert seconds to weeks.",
  usage: ["sectoweek <value>"],
  examples: ["sectoweek 10"],
  group: "conversion",
  fromLabel: "Seconds",
  toLabel: "Weeks",
  factor: 0.0000016534391534391535
});
