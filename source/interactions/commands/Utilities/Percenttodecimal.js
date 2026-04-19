const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "percenttodecimal",
  aliases: ["percenttodecimal"],
  title: "Percent To Decimal",
  description: "Percent To Decimal utility.",
  usage: ["percenttodecimal <value>"],
  examples: ["percenttodecimal 42"],
  group: "math",
  compute: (value) => value / 100
});
