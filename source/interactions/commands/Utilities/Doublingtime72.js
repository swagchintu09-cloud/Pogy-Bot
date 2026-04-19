const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "doublingtime72",
  aliases: ["doublingtime72"],
  title: "Rule Of 72 Doubling Estimate",
  description: "Rule Of 72 Doubling Estimate utility.",
  usage: ["doublingtime72 <value>"],
  examples: ["doublingtime72 42"],
  group: "math",
  compute: (value) => 72 / value
});
