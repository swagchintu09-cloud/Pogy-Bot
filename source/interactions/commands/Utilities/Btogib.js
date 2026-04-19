const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "btogib",
  aliases: ["btogib"],
  title: "Bytes To Gibibytes",
  description: "Convert bytes to gibibytes.",
  usage: ["btogib <value>"],
  examples: ["btogib 10"],
  group: "conversion",
  fromLabel: "Bytes",
  toLabel: "Gibibytes",
  factor: 9.313225746154785e-10
});
