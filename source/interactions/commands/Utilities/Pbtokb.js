const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "pbtokb",
  aliases: ["pbtokb"],
  title: "Petabytes To Kilobytes",
  description: "Convert petabytes to kilobytes.",
  usage: ["pbtokb <value>"],
  examples: ["pbtokb 10"],
  group: "conversion",
  fromLabel: "Petabytes",
  toLabel: "Kilobytes",
  factor: 1099511627776
});
