const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "percentofone",
  aliases: ["percentofone"],
  title: "Percent Of One",
  description: "Percent Of One utility.",
  usage: ["percentofone <value>"],
  examples: ["percentofone 42"],
  group: "math",
  compute: (value) => value / 100
});
