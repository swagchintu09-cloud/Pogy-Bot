const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kibtob",
  aliases: ["kibtob"],
  title: "Kibibytes To Bytes",
  description: "Convert kibibytes to bytes.",
  usage: ["kibtob <value>"],
  examples: ["kibtob 10"],
  group: "conversion",
  fromLabel: "Kibibytes",
  toLabel: "Bytes",
  factor: 1024
});
