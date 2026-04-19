const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "circleringarea",
  aliases: ["circleringarea"],
  title: "Ring Area From Radii",
  description: "Ring Area From Radii utility.",
  usage: ["circleringarea <left> <right>"],
  examples: ["circleringarea 10 20"],
  group: "math",
  compute: (left, right) => Math.PI * ((Math.max(left, right) ** 2) - (Math.min(left, right) ** 2))
});
