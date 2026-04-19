const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "btokb",
  aliases: ["btokb"],
  title: "Bytes To Kilobytes",
  description: "Convert bytes to kilobytes.",
  usage: ["btokb <value>"],
  examples: ["btokb 10"],
  group: "conversion",
  fromLabel: "Bytes",
  toLabel: "Kilobytes",
  factor: 0.0009765625
});
