const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kbtob",
  aliases: ["kbtob"],
  title: "Kilobytes To Bytes",
  description: "Convert kilobytes to bytes.",
  usage: ["kbtob <value>"],
  examples: ["kbtob 10"],
  group: "conversion",
  fromLabel: "Kilobytes",
  toLabel: "Bytes",
  factor: 1024
});
