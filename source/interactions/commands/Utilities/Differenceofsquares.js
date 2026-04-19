const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "differenceofsquares",
  aliases: ["differenceofsquares"],
  title: "Difference Of Squares",
  description: "Difference Of Squares utility.",
  usage: ["differenceofsquares <left> <right>"],
  examples: ["differenceofsquares 10 20"],
  group: "math",
  compute: (left, right) => (left * left) - (right * right)
});
