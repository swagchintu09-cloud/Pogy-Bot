const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "daytoweek",
  aliases: ["daytoweek"],
  title: "Days To Weeks",
  description: "Convert days to weeks.",
  usage: ["daytoweek <value>"],
  examples: ["daytoweek 10"],
  group: "conversion",
  fromLabel: "Days",
  toLabel: "Weeks",
  factor: 0.14285714285714285
});
