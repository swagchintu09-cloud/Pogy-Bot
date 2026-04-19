const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "tip10",
  aliases: ["tip10"],
  title: "Ten Percent Tip",
  description: "Ten Percent Tip utility.",
  usage: ["tip10 <value>"],
  examples: ["tip10 42"],
  group: "math",
  compute: (value) => value * 0.10
});
