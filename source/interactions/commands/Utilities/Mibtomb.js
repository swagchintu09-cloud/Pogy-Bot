const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mibtomb",
  aliases: ["mibtomb"],
  title: "Mebibytes To Megabytes",
  description: "Convert mebibytes to megabytes.",
  usage: ["mibtomb <value>"],
  examples: ["mibtomb 10"],
  group: "conversion",
  fromLabel: "Mebibytes",
  toLabel: "Megabytes",
  factor: 1
});
