const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "decimaltopercent",
  aliases: ["decimaltopercent"],
  title: "Decimal To Percent",
  description: "Decimal To Percent utility.",
  usage: ["decimaltopercent <value>"],
  examples: ["decimaltopercent 42"],
  group: "math",
  compute: (value) => value * 100
});
