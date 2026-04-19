const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "yearsintomonths",
  aliases: ["yearsintomonths"],
  title: "Years Into Months",
  description: "Years Into Months utility.",
  usage: ["yearsintomonths <value>"],
  examples: ["yearsintomonths 42"],
  group: "math",
  compute: (value) => value * 12
});
