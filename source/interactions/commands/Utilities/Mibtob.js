const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mibtob",
  aliases: ["mibtob"],
  title: "Mebibytes To Bytes",
  description: "Convert mebibytes to bytes.",
  usage: ["mibtob <value>"],
  examples: ["mibtob 10"],
  group: "conversion",
  fromLabel: "Mebibytes",
  toLabel: "Bytes",
  factor: 1048576
});
