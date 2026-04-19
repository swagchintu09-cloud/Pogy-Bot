const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "pbtomb",
  aliases: ["pbtomb"],
  title: "Petabytes To Megabytes",
  description: "Convert petabytes to megabytes.",
  usage: ["pbtomb <value>"],
  examples: ["pbtomb 10"],
  group: "conversion",
  fromLabel: "Petabytes",
  toLabel: "Megabytes",
  factor: 1073741824
});
