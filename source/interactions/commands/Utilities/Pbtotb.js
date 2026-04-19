const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "pbtotb",
  aliases: ["pbtotb"],
  title: "Petabytes To Terabytes",
  description: "Convert petabytes to terabytes.",
  usage: ["pbtotb <value>"],
  examples: ["pbtotb 10"],
  group: "conversion",
  fromLabel: "Petabytes",
  toLabel: "Terabytes",
  factor: 1024
});
