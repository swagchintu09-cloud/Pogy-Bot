const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "bytesintogb",
  aliases: ["bytesintogb"],
  title: "Bytes Into Gigabytes",
  description: "Bytes Into Gigabytes utility.",
  usage: ["bytesintogb <value>"],
  examples: ["bytesintogb 42"],
  group: "math",
  compute: (value) => value / (1024 ** 3)
});
