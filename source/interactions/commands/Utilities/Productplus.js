const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "productplus",
  aliases: ["productplus"],
  title: "Product Plus Sum",
  description: "Product Plus Sum utility.",
  usage: ["productplus <left> <right>"],
  examples: ["productplus 10 20"],
  group: "math",
  compute: (left, right) => (left * right) + left + right
});
