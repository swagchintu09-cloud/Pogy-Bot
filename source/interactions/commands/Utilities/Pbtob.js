const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "pbtob",
  aliases: ["pbtob"],
  title: "Petabytes To Bytes",
  description: "Convert petabytes to bytes.",
  usage: ["pbtob <value>"],
  examples: ["pbtob 10"],
  group: "conversion",
  fromLabel: "Petabytes",
  toLabel: "Bytes",
  factor: 1125899906842624
});
