const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "btotb",
  aliases: ["btotb"],
  title: "Bytes To Terabytes",
  description: "Convert bytes to terabytes.",
  usage: ["btotb <value>"],
  examples: ["btotb 10"],
  group: "conversion",
  fromLabel: "Bytes",
  toLabel: "Terabytes",
  factor: 9.094947017729282e-13
});
