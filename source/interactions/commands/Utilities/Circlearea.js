const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "circlearea",
  aliases: ["circlearea"],
  title: "Circle Area",
  description: "Circle Area utility.",
  usage: ["circlearea <value>"],
  examples: ["circlearea 42"],
  group: "math",
  compute: (value) => Math.PI * value * value
});
