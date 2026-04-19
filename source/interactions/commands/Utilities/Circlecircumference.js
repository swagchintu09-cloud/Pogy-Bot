const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "circlecircumference",
  aliases: ["circlecircumference"],
  title: "Circle Circumference",
  description: "Circle Circumference utility.",
  usage: ["circlecircumference <value>"],
  examples: ["circlecircumference 42"],
  group: "math",
  compute: (value) => 2 * Math.PI * value
});
