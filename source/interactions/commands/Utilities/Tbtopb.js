const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tbtopb",
  aliases: ["tbtopb"],
  title: "Terabytes To Petabytes",
  description: "Convert terabytes to petabytes.",
  usage: ["tbtopb <value>"],
  examples: ["tbtopb 10"],
  group: "conversion",
  fromLabel: "Terabytes",
  toLabel: "Petabytes",
  factor: 0.0009765625
});
