const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "gbtob",
  aliases: ["gbtob"],
  title: "Gigabytes To Bytes",
  description: "Convert gigabytes to bytes.",
  usage: ["gbtob <value>"],
  examples: ["gbtob 10"],
  group: "conversion",
  fromLabel: "Gigabytes",
  toLabel: "Bytes",
  factor: 1073741824
});
