const { createGeneratedUtilityCommand } = require("./_generatedFactory");

module.exports = createGeneratedUtilityCommand({
  mode: "unit_convert",
  name: "kbtomb",
  aliases: ["kbtomb"],
  title: "Kilobytes To Megabytes",
  description: "Convert kilobytes to megabytes.",
  usage: ["kbtomb <value>"],
  examples: ["kbtomb 10"],
  group: "conversion",
  fromLabel: "Kilobytes",
  toLabel: "Megabytes",
  factor: 0.0009765625
});
