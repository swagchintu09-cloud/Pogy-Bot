const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "taxamount",
  aliases: ["taxamount"],
  title: "Tax Amount",
  description: "Tax Amount utility.",
  usage: ["taxamount <left> <right>"],
  examples: ["taxamount 10 20"],
  group: "math",
  compute: (left, right) => left * (right / 100)
});
