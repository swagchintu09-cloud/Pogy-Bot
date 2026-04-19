const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "tbtob",
  aliases: ["tbtob"],
  title: "Terabytes To Bytes",
  description: "Convert terabytes to bytes.",
  usage: ["tbtob <value>"],
  examples: ["tbtob 10"],
  group: "conversion",
  fromLabel: "Terabytes",
  toLabel: "Bytes",
  factor: 1099511627776
});
