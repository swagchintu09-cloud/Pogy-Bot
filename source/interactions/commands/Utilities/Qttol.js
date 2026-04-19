const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "qttol",
  aliases: ["qttol"],
  title: "Quarts To Liters",
  description: "Convert quarts to liters.",
  usage: ["qttol <value>"],
  examples: ["qttol 10"],
  group: "conversion",
  fromLabel: "Quarts",
  toLabel: "Liters",
  factor: 0.946352946
});
