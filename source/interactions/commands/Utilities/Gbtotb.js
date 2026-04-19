const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gbtotb",
  aliases: ["gbtotb"],
  title: "Gigabytes To Terabytes",
  description: "Convert gigabytes to terabytes.",
  usage: ["gbtotb <value>"],
  examples: ["gbtotb 10"],
  group: "conversion",
  fromLabel: "Gigabytes",
  toLabel: "Terabytes",
  factor: 0.0009765625
});
