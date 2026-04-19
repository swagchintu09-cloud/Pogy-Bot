const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "cubicmetersfromside",
  aliases: ["cubicmetersfromside"],
  title: "Cubic Meters From Side",
  description: "Cubic Meters From Side utility.",
  usage: ["cubicmetersfromside <value>"],
  examples: ["cubicmetersfromside 42"],
  group: "math",
  compute: (value) => value * value * value
});
