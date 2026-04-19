const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tbtogib",
  aliases: ["tbtogib"],
  title: "Terabytes To Gibibytes",
  description: "Convert terabytes to gibibytes.",
  usage: ["tbtogib <value>"],
  examples: ["tbtogib 10"],
  group: "conversion",
  fromLabel: "Terabytes",
  toLabel: "Gibibytes",
  factor: 1024
});
