const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tbtokib",
  aliases: ["tbtokib"],
  title: "Terabytes To Kibibytes",
  description: "Convert terabytes to kibibytes.",
  usage: ["tbtokib <value>"],
  examples: ["tbtokib 10"],
  group: "conversion",
  fromLabel: "Terabytes",
  toLabel: "Kibibytes",
  factor: 1073741824
});
