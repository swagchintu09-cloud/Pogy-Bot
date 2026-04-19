const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mibtokib",
  aliases: ["mibtokib"],
  title: "Mebibytes To Kibibytes",
  description: "Convert mebibytes to kibibytes.",
  usage: ["mibtokib <value>"],
  examples: ["mibtokib 10"],
  group: "conversion",
  fromLabel: "Mebibytes",
  toLabel: "Kibibytes",
  factor: 1024
});
