const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gibtokb",
  aliases: ["gibtokb"],
  title: "Gibibytes To Kilobytes",
  description: "Convert gibibytes to kilobytes.",
  usage: ["gibtokb <value>"],
  examples: ["gibtokb 10"],
  group: "conversion",
  fromLabel: "Gibibytes",
  toLabel: "Kilobytes",
  factor: 1048576
});
