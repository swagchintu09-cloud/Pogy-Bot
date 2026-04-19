const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mbtopb",
  aliases: ["mbtopb"],
  title: "Megabytes To Petabytes",
  description: "Convert megabytes to petabytes.",
  usage: ["mbtopb <value>"],
  examples: ["mbtopb 10"],
  group: "conversion",
  fromLabel: "Megabytes",
  toLabel: "Petabytes",
  factor: 9.313225746154785e-10
});
