const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "yearstodays",
  aliases: ["yearstodays"],
  title: "Years To Days",
  description: "Years To Days utility.",
  usage: ["yearstodays <value>"],
  examples: ["yearstodays 42"],
  group: "math",
  compute: (value) => value * 365
});
