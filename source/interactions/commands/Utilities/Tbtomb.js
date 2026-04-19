const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tbtomb",
  aliases: ["tbtomb"],
  title: "Terabytes To Megabytes",
  description: "Convert terabytes to megabytes.",
  usage: ["tbtomb <value>"],
  examples: ["tbtomb 10"],
  group: "conversion",
  fromLabel: "Terabytes",
  toLabel: "Megabytes",
  factor: 1048576
});
