const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "averagenums",
  aliases: ["averagenums"],
  title: "Average",
  description: "Average utility.",
  usage: ["averagenums <left> <right>"],
  examples: ["averagenums 10 20"],
  group: "math",
  compute: (left, right) => (left + right) / 2
});
