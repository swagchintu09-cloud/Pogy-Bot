const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "hoursintodays",
  aliases: ["hoursintodays"],
  title: "Hours Into Days",
  description: "Hours Into Days utility.",
  usage: ["hoursintodays <value>"],
  examples: ["hoursintodays 42"],
  group: "math",
  compute: (value) => value / 24
});
