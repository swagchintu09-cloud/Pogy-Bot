const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mbtokib",
  aliases: ["mbtokib"],
  title: "Megabytes To Kibibytes",
  description: "Convert megabytes to kibibytes.",
  usage: ["mbtokib <value>"],
  examples: ["mbtokib 10"],
  group: "conversion",
  fromLabel: "Megabytes",
  toLabel: "Kibibytes",
  factor: 1024
});
