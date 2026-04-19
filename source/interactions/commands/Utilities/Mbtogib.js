const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "mbtogib",
  aliases: ["mbtogib"],
  title: "Megabytes To Gibibytes",
  description: "Convert megabytes to gibibytes.",
  usage: ["mbtogib <value>"],
  examples: ["mbtogib 10"],
  group: "conversion",
  fromLabel: "Megabytes",
  toLabel: "Gibibytes",
  factor: 0.0009765625
});
