const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gbtomib",
  aliases: ["gbtomib"],
  title: "Gigabytes To Mebibytes",
  description: "Convert gigabytes to mebibytes.",
  usage: ["gbtomib <value>"],
  examples: ["gbtomib 10"],
  group: "conversion",
  fromLabel: "Gigabytes",
  toLabel: "Mebibytes",
  factor: 1024
});
