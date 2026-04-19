const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mbtob",
  aliases: ["mbtob"],
  title: "Megabytes To Bytes",
  description: "Convert megabytes to bytes.",
  usage: ["mbtob <value>"],
  examples: ["mbtob 10"],
  group: "conversion",
  fromLabel: "Megabytes",
  toLabel: "Bytes",
  factor: 1048576
});
