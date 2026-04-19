const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "discountamount",
  aliases: ["discountamount"],
  title: "Discount Amount",
  description: "Discount Amount utility.",
  usage: ["discountamount <left> <right>"],
  examples: ["discountamount 10 20"],
  group: "math",
  compute: (left, right) => left * (right / 100)
});
