const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "tip20",
  aliases: ["tip20"],
  title: "Twenty Percent Tip",
  description: "Twenty Percent Tip utility.",
  usage: ["tip20 <value>"],
  examples: ["tip20 42"],
  group: "math",
  compute: (value) => value * 0.20
});
