const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kibtogib",
  aliases: ["kibtogib"],
  title: "Kibibytes To Gibibytes",
  description: "Convert kibibytes to gibibytes.",
  usage: ["kibtogib <value>"],
  examples: ["kibtogib 10"],
  group: "conversion",
  fromLabel: "Kibibytes",
  toLabel: "Gibibytes",
  factor: 9.5367431640625e-7
});
