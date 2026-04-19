const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gbtokb",
  aliases: ["gbtokb"],
  title: "Gigabytes To Kilobytes",
  description: "Convert gigabytes to kilobytes.",
  usage: ["gbtokb <value>"],
  examples: ["gbtokb 10"],
  group: "conversion",
  fromLabel: "Gigabytes",
  toLabel: "Kilobytes",
  factor: 1048576
});
