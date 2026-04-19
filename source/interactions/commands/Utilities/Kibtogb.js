const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kibtogb",
  aliases: ["kibtogb"],
  title: "Kibibytes To Gigabytes",
  description: "Convert kibibytes to gigabytes.",
  usage: ["kibtogb <value>"],
  examples: ["kibtogb 10"],
  group: "conversion",
  fromLabel: "Kibibytes",
  toLabel: "Gigabytes",
  factor: 9.5367431640625e-7
});
