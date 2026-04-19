const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gibtob",
  aliases: ["gibtob"],
  title: "Gibibytes To Bytes",
  description: "Convert gibibytes to bytes.",
  usage: ["gibtob <value>"],
  examples: ["gibtob 10"],
  group: "conversion",
  fromLabel: "Gibibytes",
  toLabel: "Bytes",
  factor: 1073741824
});
