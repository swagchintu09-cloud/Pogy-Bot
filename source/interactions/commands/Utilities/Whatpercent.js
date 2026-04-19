const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "whatpercent",
  aliases: ["whatpercent"],
  title: "What Percent",
  description: "What Percent utility.",
  usage: ["whatpercent <left> <right>"],
  examples: ["whatpercent 10 20"],
  group: "math",
  compute: (left, right) => right === 0 ? NaN : (left / right) * 100
});
