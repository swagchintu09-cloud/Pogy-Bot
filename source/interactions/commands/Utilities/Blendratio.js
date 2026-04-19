const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "blendratio",
  aliases: ["blendratio"],
  title: "Blend Ratio",
  description: "Blend Ratio utility.",
  usage: ["blendratio <left> <right>"],
  examples: ["blendratio 10 20"],
  group: "math",
  compute: (left, right) => right === 0 ? NaN : left / right
});
