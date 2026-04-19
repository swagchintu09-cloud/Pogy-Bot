const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "squaremetersfromside",
  aliases: ["squaremetersfromside"],
  title: "Square Meters From Side",
  description: "Square Meters From Side utility.",
  usage: ["squaremetersfromside <value>"],
  examples: ["squaremetersfromside 42"],
  group: "math",
  compute: (value) => value * value
});
