const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kibtopb",
  aliases: ["kibtopb"],
  title: "Kibibytes To Petabytes",
  description: "Convert kibibytes to petabytes.",
  usage: ["kibtopb <value>"],
  examples: ["kibtopb 10"],
  group: "conversion",
  fromLabel: "Kibibytes",
  toLabel: "Petabytes",
  factor: 9.094947017729282e-13
});
