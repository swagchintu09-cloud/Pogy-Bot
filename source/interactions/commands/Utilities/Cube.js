const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "cube",
  aliases: ["cube"],
  title: "Cube",
  description: "Cube utility.",
  usage: ["cube <value>"],
  examples: ["cube 42"],
  group: "math",
  compute: (value) => value * value * value
});
