const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "sumofsquares",
  aliases: ["sumofsquares"],
  title: "Sum Of Squares",
  description: "Sum Of Squares utility.",
  usage: ["sumofsquares <left> <right>"],
  examples: ["sumofsquares 10 20"],
  group: "math",
  compute: (left, right) => (left * left) + (right * right)
});
