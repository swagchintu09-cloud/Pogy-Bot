const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kibtomib",
  aliases: ["kibtomib"],
  title: "Kibibytes To Mebibytes",
  description: "Convert kibibytes to mebibytes.",
  usage: ["kibtomib <value>"],
  examples: ["kibtomib 10"],
  group: "conversion",
  fromLabel: "Kibibytes",
  toLabel: "Mebibytes",
  factor: 0.0009765625
});
