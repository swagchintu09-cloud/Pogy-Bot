const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gbtokib",
  aliases: ["gbtokib"],
  title: "Gigabytes To Kibibytes",
  description: "Convert gigabytes to kibibytes.",
  usage: ["gbtokib <value>"],
  examples: ["gbtokib 10"],
  group: "conversion",
  fromLabel: "Gigabytes",
  toLabel: "Kibibytes",
  factor: 1048576
});
