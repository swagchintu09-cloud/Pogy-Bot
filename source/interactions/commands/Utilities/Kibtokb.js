const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kibtokb",
  aliases: ["kibtokb"],
  title: "Kibibytes To Kilobytes",
  description: "Convert kibibytes to kilobytes.",
  usage: ["kibtokb <value>"],
  examples: ["kibtokb 10"],
  group: "conversion",
  fromLabel: "Kibibytes",
  toLabel: "Kilobytes",
  factor: 1
});
