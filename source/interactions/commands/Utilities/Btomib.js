const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "btomib",
  aliases: ["btomib"],
  title: "Bytes To Mebibytes",
  description: "Convert bytes to mebibytes.",
  usage: ["btomib <value>"],
  examples: ["btomib 10"],
  group: "conversion",
  fromLabel: "Bytes",
  toLabel: "Mebibytes",
  factor: 9.5367431640625e-7
});
