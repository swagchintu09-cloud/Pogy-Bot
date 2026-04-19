const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "btomb",
  aliases: ["btomb"],
  title: "Bytes To Megabytes",
  description: "Convert bytes to megabytes.",
  usage: ["btomb <value>"],
  examples: ["btomb 10"],
  group: "conversion",
  fromLabel: "Bytes",
  toLabel: "Megabytes",
  factor: 9.5367431640625e-7
});
