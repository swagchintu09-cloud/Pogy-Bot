const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "btokib",
  aliases: ["btokib"],
  title: "Bytes To Kibibytes",
  description: "Convert bytes to kibibytes.",
  usage: ["btokib <value>"],
  examples: ["btokib 10"],
  group: "conversion",
  fromLabel: "Bytes",
  toLabel: "Kibibytes",
  factor: 0.0009765625
});
