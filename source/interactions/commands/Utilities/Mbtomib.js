const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mbtomib",
  aliases: ["mbtomib"],
  title: "Megabytes To Mebibytes",
  description: "Convert megabytes to mebibytes.",
  usage: ["mbtomib <value>"],
  examples: ["mbtomib 10"],
  group: "conversion",
  fromLabel: "Megabytes",
  toLabel: "Mebibytes",
  factor: 1
});
