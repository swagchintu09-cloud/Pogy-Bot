const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "tip15",
  aliases: ["tip15"],
  title: "Fifteen Percent Tip",
  description: "Fifteen Percent Tip utility.",
  usage: ["tip15 <value>"],
  examples: ["tip15 42"],
  group: "math",
  compute: (value) => value * 0.15
});
