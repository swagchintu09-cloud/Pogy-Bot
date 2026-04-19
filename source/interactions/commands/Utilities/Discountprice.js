const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "discountprice",
  aliases: ["discountprice"],
  title: "Discounted Price",
  description: "Discounted Price utility.",
  usage: ["discountprice <left> <right>"],
  examples: ["discountprice 10 20"],
  group: "math",
  compute: (left, right) => left - (left * (right / 100))
});
