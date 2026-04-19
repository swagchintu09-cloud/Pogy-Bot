const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kibtomb",
  aliases: ["kibtomb"],
  title: "Kibibytes To Megabytes",
  description: "Convert kibibytes to megabytes.",
  usage: ["kibtomb <value>"],
  examples: ["kibtomb 10"],
  group: "conversion",
  fromLabel: "Kibibytes",
  toLabel: "Megabytes",
  factor: 0.0009765625
});
