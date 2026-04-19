const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "comparedelta",
  aliases: ["comparedelta"],
  title: "Delta",
  description: "Delta utility.",
  usage: ["comparedelta <left> <right>"],
  examples: ["comparedelta 10 20"],
  group: "math",
  compute: (left, right) => right - left
});
