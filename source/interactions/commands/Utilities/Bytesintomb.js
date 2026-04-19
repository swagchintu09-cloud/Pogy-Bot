const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "number_single",
  name: "bytesintomb",
  aliases: ["bytesintomb"],
  title: "Bytes Into Megabytes",
  description: "Bytes Into Megabytes utility.",
  usage: ["bytesintomb <value>"],
  examples: ["bytesintomb 42"],
  group: "math",
  compute: (value) => value / (1024 ** 2)
});
