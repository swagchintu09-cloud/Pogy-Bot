const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "btopb",
  aliases: ["btopb"],
  title: "Bytes To Petabytes",
  description: "Convert bytes to petabytes.",
  usage: ["btopb <value>"],
  examples: ["btopb 10"],
  group: "conversion",
  fromLabel: "Bytes",
  toLabel: "Petabytes",
  factor: 8.881784197001252e-16
});
