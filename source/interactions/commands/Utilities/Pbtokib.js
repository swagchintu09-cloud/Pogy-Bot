const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "pbtokib",
  aliases: ["pbtokib"],
  title: "Petabytes To Kibibytes",
  description: "Convert petabytes to kibibytes.",
  usage: ["pbtokib <value>"],
  examples: ["pbtokib 10"],
  group: "conversion",
  fromLabel: "Petabytes",
  toLabel: "Kibibytes",
  factor: 1099511627776
});
