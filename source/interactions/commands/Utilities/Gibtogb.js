const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gibtogb",
  aliases: ["gibtogb"],
  title: "Gibibytes To Gigabytes",
  description: "Convert gibibytes to gigabytes.",
  usage: ["gibtogb <value>"],
  examples: ["gibtogb 10"],
  group: "conversion",
  fromLabel: "Gibibytes",
  toLabel: "Gigabytes",
  factor: 1
});
