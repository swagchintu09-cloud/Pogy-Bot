const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "hypotenuse",
  aliases: ["hypotenuse"],
  title: "Hypotenuse",
  description: "Hypotenuse utility.",
  usage: ["hypotenuse <left> <right>"],
  examples: ["hypotenuse 10 20"],
  group: "math",
  compute: (left, right) => Math.sqrt((left * left) + (right * right))
});
