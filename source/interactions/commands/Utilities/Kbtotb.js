const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kbtotb",
  aliases: ["kbtotb"],
  title: "Kilobytes To Terabytes",
  description: "Convert kilobytes to terabytes.",
  usage: ["kbtotb <value>"],
  examples: ["kbtotb 10"],
  group: "conversion",
  fromLabel: "Kilobytes",
  toLabel: "Terabytes",
  factor: 9.313225746154785e-10
});
