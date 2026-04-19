const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "increaseby",
  aliases: ["increaseby"],
  title: "Increase By",
  description: "Increase By utility.",
  usage: ["increaseby <left> <right>"],
  examples: ["increaseby 10 20"],
  group: "math",
  compute: (left, right) => left + right
});
