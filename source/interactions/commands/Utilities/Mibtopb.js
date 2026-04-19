const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mibtopb",
  aliases: ["mibtopb"],
  title: "Mebibytes To Petabytes",
  description: "Convert mebibytes to petabytes.",
  usage: ["mibtopb <value>"],
  examples: ["mibtopb 10"],
  group: "conversion",
  fromLabel: "Mebibytes",
  toLabel: "Petabytes",
  factor: 9.313225746154785e-10
});
