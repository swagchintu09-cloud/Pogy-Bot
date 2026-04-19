const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tbtomib",
  aliases: ["tbtomib"],
  title: "Terabytes To Mebibytes",
  description: "Convert terabytes to mebibytes.",
  usage: ["tbtomib <value>"],
  examples: ["tbtomib 10"],
  group: "conversion",
  fromLabel: "Terabytes",
  toLabel: "Mebibytes",
  factor: 1048576
});
