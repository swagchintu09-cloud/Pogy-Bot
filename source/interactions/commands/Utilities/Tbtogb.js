const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tbtogb",
  aliases: ["tbtogb"],
  title: "Terabytes To Gigabytes",
  description: "Convert terabytes to gigabytes.",
  usage: ["tbtogb <value>"],
  examples: ["tbtogb 10"],
  group: "conversion",
  fromLabel: "Terabytes",
  toLabel: "Gigabytes",
  factor: 1024
});
