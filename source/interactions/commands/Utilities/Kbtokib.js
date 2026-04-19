const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kbtokib",
  aliases: ["kbtokib"],
  title: "Kilobytes To Kibibytes",
  description: "Convert kilobytes to kibibytes.",
  usage: ["kbtokib <value>"],
  examples: ["kbtokib 10"],
  group: "conversion",
  fromLabel: "Kilobytes",
  toLabel: "Kibibytes",
  factor: 1
});
