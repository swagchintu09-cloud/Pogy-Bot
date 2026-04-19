const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kibtotb",
  aliases: ["kibtotb"],
  title: "Kibibytes To Terabytes",
  description: "Convert kibibytes to terabytes.",
  usage: ["kibtotb <value>"],
  examples: ["kibtotb 10"],
  group: "conversion",
  fromLabel: "Kibibytes",
  toLabel: "Terabytes",
  factor: 9.313225746154785e-10
});
