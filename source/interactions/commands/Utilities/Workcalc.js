const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "workcalc",
  aliases: ["workcalc"],
  title: "Work",
  description: "Work utility.",
  usage: ["workcalc <left> <right>"],
  examples: ["workcalc 10 20"],
  group: "math",
  compute: (left, right) => left * right
});
