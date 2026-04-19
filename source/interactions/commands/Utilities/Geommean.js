const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_pair",
  name: "geommean",
  aliases: ["geommean"],
  title: "Geometric Mean",
  description: "Geometric Mean utility.",
  usage: ["geommean <left> <right>"],
  examples: ["geommean 10 20"],
  group: "math",
  compute: (left, right) => Math.sqrt(left * right)
});
