const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "weeksintomonths",
  aliases: ["weeksintomonths"],
  title: "Weeks Into Months",
  description: "Weeks Into Months utility.",
  usage: ["weeksintomonths <value>"],
  examples: ["weeksintomonths 42"],
  group: "math",
  compute: (value) => value / 4.345
});
