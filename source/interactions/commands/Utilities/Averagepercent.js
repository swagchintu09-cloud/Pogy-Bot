const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "averagepercent",
  aliases: ["averagepercent"],
  title: "Average Percent",
  description: "Average Percent utility.",
  usage: ["averagepercent <left> <right>"],
  examples: ["averagepercent 10 20"],
  group: "math",
  compute: (left, right) => (left + right) / 2
});
