const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mbtogb",
  aliases: ["mbtogb"],
  title: "Megabytes To Gigabytes",
  description: "Convert megabytes to gigabytes.",
  usage: ["mbtogb <value>"],
  examples: ["mbtogb 10"],
  group: "conversion",
  fromLabel: "Megabytes",
  toLabel: "Gigabytes",
  factor: 0.0009765625
});
