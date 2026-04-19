const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mbtokb",
  aliases: ["mbtokb"],
  title: "Megabytes To Kilobytes",
  description: "Convert megabytes to kilobytes.",
  usage: ["mbtokb <value>"],
  examples: ["mbtokb 10"],
  group: "conversion",
  fromLabel: "Megabytes",
  toLabel: "Kilobytes",
  factor: 1024
});
