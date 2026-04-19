const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "pbtogb",
  aliases: ["pbtogb"],
  title: "Petabytes To Gigabytes",
  description: "Convert petabytes to gigabytes.",
  usage: ["pbtogb <value>"],
  examples: ["pbtogb 10"],
  group: "conversion",
  fromLabel: "Petabytes",
  toLabel: "Gigabytes",
  factor: 1048576
});
