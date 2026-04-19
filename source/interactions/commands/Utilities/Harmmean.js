const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "harmmean",
  aliases: ["harmmean"],
  title: "Harmonic Mean",
  description: "Harmonic Mean utility.",
  usage: ["harmmean <left> <right>"],
  examples: ["harmmean 10 20"],
  group: "math",
  compute: (left, right) => (2 * left * right) / (left + right)
});
