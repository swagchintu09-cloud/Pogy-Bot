const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mibtogb",
  aliases: ["mibtogb"],
  title: "Mebibytes To Gigabytes",
  description: "Convert mebibytes to gigabytes.",
  usage: ["mibtogb <value>"],
  examples: ["mibtogb 10"],
  group: "conversion",
  fromLabel: "Mebibytes",
  toLabel: "Gigabytes",
  factor: 0.0009765625
});
