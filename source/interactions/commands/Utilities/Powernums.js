const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "powernums",
  aliases: ["powernums"],
  title: "Power",
  description: "Power utility.",
  usage: ["powernums <left> <right>"],
  examples: ["powernums 10 20"],
  group: "math",
  compute: (left, right) => left ** right
});
