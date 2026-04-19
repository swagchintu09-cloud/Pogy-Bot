const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "inventoryvalue",
  aliases: ["inventoryvalue"],
  title: "Inventory Value",
  description: "Inventory Value utility.",
  usage: ["inventoryvalue <left> <right>"],
  examples: ["inventoryvalue 10 20"],
  group: "math",
  compute: (left, right) => left * right
});
