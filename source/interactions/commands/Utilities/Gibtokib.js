const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gibtokib",
  aliases: ["gibtokib"],
  title: "Gibibytes To Kibibytes",
  description: "Convert gibibytes to kibibytes.",
  usage: ["gibtokib <value>"],
  examples: ["gibtokib 10"],
  group: "conversion",
  fromLabel: "Gibibytes",
  toLabel: "Kibibytes",
  factor: 1048576
});
