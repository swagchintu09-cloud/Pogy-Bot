const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "bytesintokb",
  aliases: ["bytesintokb"],
  title: "Bytes Into Kilobytes",
  description: "Bytes Into Kilobytes utility.",
  usage: ["bytesintokb <value>"],
  examples: ["bytesintokb 42"],
  group: "math",
  compute: (value) => value / 1024
});
