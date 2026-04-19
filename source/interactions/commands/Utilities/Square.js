const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "square",
  aliases: ["square"],
  title: "Square",
  description: "Square utility.",
  usage: ["square <value>"],
  examples: ["square 42"],
  group: "math",
  compute: (value) => value * value
});
