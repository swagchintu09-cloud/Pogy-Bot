const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "centurytoweek",
  aliases: ["centurytoweek"],
  title: "Centuries To Weeks",
  description: "Convert centuries to weeks.",
  usage: ["centurytoweek <value>"],
  examples: ["centurytoweek 10"],
  group: "conversion",
  fromLabel: "Centuries",
  toLabel: "Weeks",
  factor: 5217.857142857143
});
