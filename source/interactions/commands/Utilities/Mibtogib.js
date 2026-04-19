const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mibtogib",
  aliases: ["mibtogib"],
  title: "Mebibytes To Gibibytes",
  description: "Convert mebibytes to gibibytes.",
  usage: ["mibtogib <value>"],
  examples: ["mibtogib 10"],
  group: "conversion",
  fromLabel: "Mebibytes",
  toLabel: "Gibibytes",
  factor: 0.0009765625
});
