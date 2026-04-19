const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mbtotb",
  aliases: ["mbtotb"],
  title: "Megabytes To Terabytes",
  description: "Convert megabytes to terabytes.",
  usage: ["mbtotb <value>"],
  examples: ["mbtotb 10"],
  group: "conversion",
  fromLabel: "Megabytes",
  toLabel: "Terabytes",
  factor: 9.5367431640625e-7
});
