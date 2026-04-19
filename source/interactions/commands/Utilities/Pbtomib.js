const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "pbtomib",
  aliases: ["pbtomib"],
  title: "Petabytes To Mebibytes",
  description: "Convert petabytes to mebibytes.",
  usage: ["pbtomib <value>"],
  examples: ["pbtomib 10"],
  group: "conversion",
  fromLabel: "Petabytes",
  toLabel: "Mebibytes",
  factor: 1073741824
});
