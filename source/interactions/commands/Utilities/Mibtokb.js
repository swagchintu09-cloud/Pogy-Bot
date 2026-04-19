const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mibtokb",
  aliases: ["mibtokb"],
  title: "Mebibytes To Kilobytes",
  description: "Convert mebibytes to kilobytes.",
  usage: ["mibtokb <value>"],
  examples: ["mibtokb 10"],
  group: "conversion",
  fromLabel: "Mebibytes",
  toLabel: "Kilobytes",
  factor: 1024
});
