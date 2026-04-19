const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "minutesintohours",
  aliases: ["minutesintohours"],
  title: "Minutes Into Hours",
  description: "Minutes Into Hours utility.",
  usage: ["minutesintohours <value>"],
  examples: ["minutesintohours 42"],
  group: "math",
  compute: (value) => value / 60
});
