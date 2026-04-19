const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "addnums",
  aliases: ["addnums"],
  title: "Add Numbers",
  description: "Add Numbers utility.",
  usage: ["addnums <left> <right>"],
  examples: ["addnums 10 20"],
  group: "math",
  compute: (left, right) => left + right
});
