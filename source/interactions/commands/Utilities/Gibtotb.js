const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gibtotb",
  aliases: ["gibtotb"],
  title: "Gibibytes To Terabytes",
  description: "Convert gibibytes to terabytes.",
  usage: ["gibtotb <value>"],
  examples: ["gibtotb 10"],
  group: "conversion",
  fromLabel: "Gibibytes",
  toLabel: "Terabytes",
  factor: 0.0009765625
});
