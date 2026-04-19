const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tbtokb",
  aliases: ["tbtokb"],
  title: "Terabytes To Kilobytes",
  description: "Convert terabytes to kilobytes.",
  usage: ["tbtokb <value>"],
  examples: ["tbtokb 10"],
  group: "conversion",
  fromLabel: "Terabytes",
  toLabel: "Kilobytes",
  factor: 1073741824
});
