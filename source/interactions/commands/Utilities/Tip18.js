const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "tip18",
  aliases: ["tip18"],
  title: "Eighteen Percent Tip",
  description: "Eighteen Percent Tip utility.",
  usage: ["tip18 <value>"],
  examples: ["tip18 42"],
  group: "math",
  compute: (value) => value * 0.18
});
