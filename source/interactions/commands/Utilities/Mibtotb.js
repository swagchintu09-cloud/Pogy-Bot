const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mibtotb",
  aliases: ["mibtotb"],
  title: "Mebibytes To Terabytes",
  description: "Convert mebibytes to terabytes.",
  usage: ["mibtotb <value>"],
  examples: ["mibtotb 10"],
  group: "conversion",
  fromLabel: "Mebibytes",
  toLabel: "Terabytes",
  factor: 9.5367431640625e-7
});
