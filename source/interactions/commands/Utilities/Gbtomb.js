const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gbtomb",
  aliases: ["gbtomb"],
  title: "Gigabytes To Megabytes",
  description: "Convert gigabytes to megabytes.",
  usage: ["gbtomb <value>"],
  examples: ["gbtomb 10"],
  group: "conversion",
  fromLabel: "Gigabytes",
  toLabel: "Megabytes",
  factor: 1024
});
