const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "btogb",
  aliases: ["btogb"],
  title: "Bytes To Gigabytes",
  description: "Convert bytes to gigabytes.",
  usage: ["btogb <value>"],
  examples: ["btogb 10"],
  group: "conversion",
  fromLabel: "Bytes",
  toLabel: "Gigabytes",
  factor: 9.313225746154785e-10
});
